FROM openjdk:11
EXPOSE 8761
ADD target/Eurika-0.0.1-SNAPSHOT.jar appeurika.jar
ENTRYPOINT ["java", "-jar","appeurika.jar"]