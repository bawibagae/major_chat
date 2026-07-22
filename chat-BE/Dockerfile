# 1단계: Gradle 8.14 + Java 25 환경에서 빌드
FROM gradle:8.14-jdk25 AS builder
WORKDIR /app

# 프로젝트 파일 복사
COPY . .

# 빌드 진행 (테스트 제외)
RUN gradle build -x test --no-daemon

# 2단계: Java 25 실행 환경 구축
FROM eclipse-temurin:25-jdk-noble
WORKDIR /app

# 빌드된 jar 파일 복사
COPY --from=builder /app/build/libs/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]