FROM openjdk:8
EXPOSE 8761
ADD target/Bloc_MS-0.0.1-SNAPSHOT.jar Bloc_MS.jar
ENTRYPOINT ["java","-jar","Bloc_MS.jar"]
