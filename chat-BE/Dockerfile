# 1단계: 최신 Gradle (8.14) 환경에서 빌드
FROM gradle:8.14-jdk17 AS builder
WORKDIR /app

# 프로젝트 파일 복사
COPY . .

# 빌드 진행 (테스트 제외)
RUN gradle build -x test --no-daemon

# 2단계: 빌드된 .jar 파일만 가져와서 실행
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

COPY --from=builder /app/build/libs/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]