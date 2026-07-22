# 1단계: Gradle 공식 이미지를 사용해 빌드
FROM gradle:8.5-jdk17 AS builder
WORKDIR /app

# 프로젝트 전체 복사
COPY . .

# gradlew 실행 대신 설치된 gradle 명령어로 직접 빌드
RUN gradle build -x test --no-daemon

# 2단계: 빌드된 jar 파일 실행
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

COPY --from=builder /app/build/libs/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]