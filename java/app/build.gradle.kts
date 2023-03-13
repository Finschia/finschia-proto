import com.google.protobuf.gradle.protobuf
import com.google.protobuf.gradle.protoc
import com.google.protobuf.gradle.plugins
import com.google.protobuf.gradle.id
import com.google.protobuf.gradle.generateProtoTasks
import org.gradle.api.JavaVersion.VERSION_1_8

plugins {
    // Apply the org.jetbrains.kotlin.jvm Plugin to add support for Kotlin.
    id("org.jetbrains.kotlin.jvm") version "1.8.10"

    // Apply the java-library plugin for API and implementation separation.
    `java-library`

    id("com.google.protobuf")
    id("distribution")
}

repositories {
    // Use Maven Central for resolving dependencies.
    mavenCentral()
}

dependencies {
    constraints {
        implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    }

    // Align versions of all Kotlin components
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))

    // Use the Kotlin JDK 8 standard library.
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    api(libs.grpc.protobuf)
    api(libs.grpc.kotlin.stub)
    api(libs.grpc.stub)
    api(libs.protobuf.kotlin)
}

sourceSets {
    main {
        proto {
            srcDir ("../../repositories/lbm-sdk/proto")
            srcDir ("../../repositories/lbm-sdk/third_party/proto")
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