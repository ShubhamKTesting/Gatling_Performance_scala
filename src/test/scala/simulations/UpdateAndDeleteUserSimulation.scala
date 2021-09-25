package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class UpdateAndDeleteUserSimulation extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("accept","application/json")
    .header("content-type","application/json")

  val scn = scenario("Update User Request")
    //Updating the user
    .exec(http("Update specific user")
      .put("api/users/2")
      .body(RawFileBody("./src/test/resources/bodies/updateuser.json")).asJson
      .check(status in (200 to 201)))
    .pause(3)
    //Delete the user
    .exec(http("Delete user")
      .delete("api/users/2")
      .check(status.in(200 to 204)))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
