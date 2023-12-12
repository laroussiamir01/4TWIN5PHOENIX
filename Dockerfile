FROM openjdk:17
EXPOSE 8090
ADD target/API_Gateway-0.0.1-SNAPSHOT.jar gateway.jar
ENTRYPOINT ["java", "-jar","gateway.jar"]