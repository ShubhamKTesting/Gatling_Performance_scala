package simulations
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class DataFeederCSV extends Simulation{

  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization","Bearer f77add17086c1c8cff1b0c95c54f090c4ce93781534a2792f87868e5c28f51e3")

  //Circular, shuffle, random , queue
  val csvFeeder = csv("./src/test/resources/data/getUser.csv").random

  def getUser() = {
    repeat(7) {
      feed(csvFeeder)
        .exec(http("Get single user")
          .get("public/v1/users/${userid}")
          .check(jsonPath("$.data.name").is("${name}"))
          .check(status.in(200, 304))) //304 #data is already in cache and pick from it
        .pause(2)
    }
  }

   val scn = scenario("CSV FEEDER test").exec(getUser())


  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
