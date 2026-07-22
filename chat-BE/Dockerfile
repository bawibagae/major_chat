# 1. Java 17 환경 설정 (프로젝트 자바 버전에 맞게 변경 가능)
FROM openjdk:17-jdk-slim

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. 빌드된 jar 파일 복사
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar

# 4. 앱 실행
ENTRYPOINT ["java", "-jar", "/app.jar"]