FROM openjdk:8
EXPOSE 8099
ADD target/Foyer-0.0.1-SNAPSHOT.jar Foyer.jar
ENTRYPOINT ["java","-jar","Foyer.jar"]
