package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class LoadSimulationBasic extends Simulation{
  // Requests are capturing in fiddler proxy on port 8888
  val httpConf = http.proxy(Proxy("localhost",8888))
    .baseUrl("https://gorest.co.in/")
    .header("Authorization","Bearer f77add17086c1c8cff1b0c95c54f090c4ce93781534a2792f87868e5c28f51e3")

  //Circular, shuffle, random , queue
  val csvFeeder = csv("./src/test/resources/data/getUser.csv").random

  def getUser() = {
    repeat(1) {
      feed(csvFeeder)
        .exec(http("Get single user")
          .get("public/v1/users/${userid}")
          .check(jsonPath("$.data.name").is("${name}"))
          .check(status.in(200, 304))) //304 #data is already in cache and pick from it
        .pause(2)
    }
  }

  val scn = scenario("Basic load Simulation").exec(getUser())

  setUp(
    scn.inject(
      nothingFor(5), // Don't do anything for initial 5 sec
      atOnceUsers(10), // will start with 10 users
      rampUsers(15) during( 5 seconds) // will ramp up 15 users in next 5 sec
    ).protocols(httpConf))

}
