var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "160",
        "ok": "106",
        "ko": "54"
    },
    "minResponseTime": {
        "total": "248",
        "ok": "248",
        "ko": "276"
    },
    "maxResponseTime": {
        "total": "1348",
        "ok": "1348",
        "ko": "610"
    },
    "meanResponseTime": {
        "total": "325",
        "ok": "324",
        "ko": "329"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "117",
        "ko": "60"
    },
    "percentiles1": {
        "total": "307",
        "ok": "307",
        "ko": "314"
    },
    "percentiles2": {
        "total": "332",
        "ok": "328",
        "ko": "339"
    },
    "percentiles3": {
        "total": "372",
        "ok": "356",
        "ko": "416"
    },
    "percentiles4": {
        "total": "684",
        "ok": "777",
        "ko": "573"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 105,
    "percentage": 66
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 54,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.161",
        "ok": "3.419",
        "ko": "1.742"
    }
},
contents: {
"req_get-single-user-e1512": {
        type: "REQUEST",
        name: "Get single user",
path: "Get single user",
pathFormatted: "req_get-single-user-e1512",
stats: {
    "name": "Get single user",
    "numberOfRequests": {
        "total": "160",
        "ok": "106",
        "ko": "54"
    },
    "minResponseTime": {
        "total": "248",
        "ok": "248",
        "ko": "276"
    },
    "maxResponseTime": {
        "total": "1348",
        "ok": "1348",
        "ko": "610"
    },
    "meanResponseTime": {
        "total": "325",
        "ok": "324",
        "ko": "329"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "117",
        "ko": "60"
    },
    "percentiles1": {
        "total": "307",
        "ok": "307",
        "ko": "314"
    },
    "percentiles2": {
        "total": "332",
        "ok": "328",
        "ko": "339"
    },
    "percentiles3": {
        "total": "372",
        "ok": "356",
        "ko": "416"
    },
    "percentiles4": {
        "total": "684",
        "ok": "777",
        "ko": "573"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 105,
    "percentage": 66
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 54,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.161",
        "ok": "3.419",
        "ko": "1.742"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
