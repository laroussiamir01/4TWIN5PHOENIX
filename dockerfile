FROM openjdk:8
EXPOSE 8096
ADD target/Chambre-0.0.1-SNAPSHOT.jar Chambre.jar
ENTRYPOINT ["java","-jar","Chambre.jar"]
