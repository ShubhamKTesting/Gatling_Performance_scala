package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckResponseAndExtractData extends Simulation{

  var httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization","Bearer f77add17086c1c8cff1b0c95c54f090c4ce93781534a2792f87868e5c28f51e3")

  val scn = scenario("Check Correlation and extract data")
  // first call-- get all the users
    .exec(http("Get all users")
      .get("public-api/users")
      .check(jsonPath("$.data[0].id").saveAs("userId"))) // JSON array so use data[0]# indexing

    .exec(http("Get specific user")
    .get("public-api/users/${userId}")
      .check(jsonPath("$.data.id").is("1")) // simple array so no need to write like data[0].id
      .check(jsonPath("$.data.name").is("Ekaling Khatri"))
      .check(jsonPath("$.data.email").is("ekaling_khatri@christiansen-murazik.co")))


  //setup
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
