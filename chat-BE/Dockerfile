# 1단계: Gradle을 사용해 자바 프로젝트 빌드
FROM gradle:8.5-jdk17 AS builder
WORKDIR /app

# 프로젝트 파일 복사 및 실행 권한 부여
COPY . .
RUN chmod +x ./gradlew

# 테스트 제외하고 .jar 파일 생성
RUN ./gradlew build -x test --no-daemon

# 2단계: 빌드된 .jar 파일만 가져와서 실행 환경 구축
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

# 1단계에서 생성된 jar 파일만 복사
COPY --from=builder /app/build/libs/*.jar app.jar

# 앱 실행
ENTRYPOINT ["java", "-jar", "app.jar"]