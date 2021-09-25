var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25",
        "ok": "0",
        "ko": "25"
    },
    "minResponseTime": {
        "total": "276",
        "ok": "-",
        "ko": "276"
    },
    "maxResponseTime": {
        "total": "589",
        "ok": "-",
        "ko": "589"
    },
    "meanResponseTime": {
        "total": "353",
        "ok": "-",
        "ko": "353"
    },
    "standardDeviation": {
        "total": "63",
        "ok": "-",
        "ko": "63"
    },
    "percentiles1": {
        "total": "339",
        "ok": "-",
        "ko": "339"
    },
    "percentiles2": {
        "total": "377",
        "ok": "-",
        "ko": "377"
    },
    "percentiles3": {
        "total": "414",
        "ok": "-",
        "ko": "414"
    },
    "percentiles4": {
        "total": "547",
        "ok": "-",
        "ko": "547"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 25,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.125",
        "ok": "-",
        "ko": "3.125"
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
        "total": "25",
        "ok": "0",
        "ko": "25"
    },
    "minResponseTime": {
        "total": "276",
        "ok": "-",
        "ko": "276"
    },
    "maxResponseTime": {
        "total": "589",
        "ok": "-",
        "ko": "589"
    },
    "meanResponseTime": {
        "total": "353",
        "ok": "-",
        "ko": "353"
    },
    "standardDeviation": {
        "total": "63",
        "ok": "-",
        "ko": "63"
    },
    "percentiles1": {
        "total": "339",
        "ok": "-",
        "ko": "339"
    },
    "percentiles2": {
        "total": "377",
        "ok": "-",
        "ko": "377"
    },
    "percentiles3": {
        "total": "414",
        "ok": "-",
        "ko": "414"
    },
    "percentiles4": {
        "total": "547",
        "ok": "-",
        "ko": "547"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 25,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.125",
        "ok": "-",
        "ko": "3.125"
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
