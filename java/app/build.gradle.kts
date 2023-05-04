import com.google.protobuf.gradle.protobuf
import com.google.protobuf.gradle.protoc
import com.google.protobuf.gradle.plugins
import com.google.protobuf.gradle.id
import com.google.protobuf.gradle.generateProtoTasks
import org.gradle.api.JavaVersion.VERSION_1_8

plugins {
    // Apply the org.jetbrains.kotlin.jvm Plugin to add support for Kotlin.
    id("org.jetbrains.kotlin.jvm") version "1.5.10"

    // Apply the java-library plugin for API and implementation separation.
    `java-library`

    id("com.google.protobuf")
    id("distribution")

    `maven-publish`
    signing
}

repositories {
    // Use Maven Central for resolving dependencies.
    mavenCentral()
}

dependencies {
    api(libs.grpc.protobuf)
    api(libs.grpc.kotlin.stub)
    api(libs.grpc.stub)
    api(libs.protobuf.kotlin)
}

sourceSets {
    main {
        proto {
            srcDir ("../../repositories/finschia-sdk/proto")
            srcDir ("../../repositories/finschia-sdk/third_party/proto")
            srcDir ("../../repositories/wasmd/proto")
            srcDir ("../../repositories/ibc-go/proto")
        }
    }
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:${libs.versions.proto.get()}"
    }
    plugins {
        id("grpc") {
            artifact = "io.grpc:protoc-gen-grpc-java:${libs.versions.grpc.get()}"
        }
        id("grpckt") {
            artifact = "io.grpc:protoc-gen-grpc-kotlin:${libs.versions.grpckotlin.get()}:jdk7@jar"
        }
    }
    generateProtoTasks {
        all().forEach {
            it.plugins {
                id("grpc")
                id("grpckt")
            }
            it.builtins {
                id("kotlin")
            }
        }
    }
}

java.sourceCompatibility = VERSION_1_8
java.targetCompatibility = VERSION_1_8

tasks.jar.configure {
    exclude("**/*.proto")
    includeEmptyDirs = false
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "1.8"
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().all {
    kotlinOptions {
        freeCompilerArgs += "-Xopt-in=kotlin.RequiresOptIn"
    }
}

java{
    withJavadocJar()
    withSourcesJar()
}

tasks.javadoc {
    if (JavaVersion.current().isJava8Compatible) {
        (options as StandardJavadocDocletOptions).addBooleanOption("html5", true)
    }
}

publishing {
    val groupIdVal = "network.finschia"
    val artifactIdVal = "finschia-proto"
    val versionVal: String? = System.getProperty("VERSION")

    val pomName = "finschia"
    val pomDesc = artifactIdVal
    val pomUrl = "https://github.com/Finschia/finschia-proto"
    val pomScmConnection = "scm:git:git://github.com/Finschia/finschia-proto.git"
    val pomDeveloperConnection = "scm:git:ssh://github.com/Finschia/finschia-proto.git"
    val pomScmUrl = "https://github.com/Finschia/finschia-proto"

    val ossrhUserName = System.getenv("OSSRH_USERNAME")
    val ossrhPassword = System.getenv("OSSRH_PW")

    publications {
        create<MavenPublication>("mavenJava") {
            groupId = groupIdVal
            artifactId = artifactIdVal
            version = versionVal?.substring(1) // without v
 
            from(components["java"])
            pom {
                name.set(pomName)
                description.set(pomDesc)
                url.set(pomUrl)
                licenses {
                    license {
                        name.set("The Apache License, Version 2.0")
                        url.set("http://www.apache.org/licenses/LICENSE-2.0.txt")
                    }
                }
                developers {
                    developer {
                        id.set("dev")
                        name.set("dev")
                        email.set("dev@finschia.org")
                    }
                }
                scm {
                    connection.set(pomScmConnection)
                    developerConnection.set(pomDeveloperConnection)
                    url.set(pomScmUrl)
                }
            }
        }
    }
    repositories {
        maven {
            name = "OSSRH"
            url = uri("https://s01.oss.sonatype.org/content/repositories/releases/")
            credentials {
                username = ossrhUserName
                password = ossrhPassword
            }
        }
    }
}

signing {
    val signingKey: String? by project
    val signingPassword: String? by project
    useInMemoryPgpKeys(signingKey, signingPassword)
    sign(publishing.publications["mavenJava"])
}
