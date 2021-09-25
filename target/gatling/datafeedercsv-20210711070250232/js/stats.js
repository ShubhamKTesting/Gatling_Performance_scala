var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "2",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "84",
        "ko": "66"
    },
    "maxResponseTime": {
        "total": "413",
        "ok": "96",
        "ko": "413"
    },
    "meanResponseTime": {
        "total": "171",
        "ok": "90",
        "ko": "204"
    },
    "standardDeviation": {
        "total": "138",
        "ok": "6",
        "ko": "151"
    },
    "percentiles1": {
        "total": "92",
        "ok": "90",
        "ko": "92"
    },
    "percentiles2": {
        "total": "229",
        "ok": "93",
        "ko": "362"
    },
    "percentiles3": {
        "total": "398",
        "ok": "95",
        "ko": "403"
    },
    "percentiles4": {
        "total": "410",
        "ok": "96",
        "ko": "411"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 29
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
    "count": 5,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.438",
        "ok": "0.125",
        "ko": "0.312"
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
        "total": "7",
        "ok": "2",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "84",
        "ko": "66"
    },
    "maxResponseTime": {
        "total": "413",
        "ok": "96",
        "ko": "413"
    },
    "meanResponseTime": {
        "total": "171",
        "ok": "90",
        "ko": "204"
    },
    "standardDeviation": {
        "total": "138",
        "ok": "6",
        "ko": "151"
    },
    "percentiles1": {
        "total": "92",
        "ok": "90",
        "ko": "92"
    },
    "percentiles2": {
        "total": "229",
        "ok": "93",
        "ko": "362"
    },
    "percentiles3": {
        "total": "398",
        "ok": "95",
        "ko": "403"
    },
    "percentiles4": {
        "total": "410",
        "ok": "96",
        "ko": "411"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 29
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
    "count": 5,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.438",
        "ok": "0.125",
        "ko": "0.312"
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
