var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "4",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "82"
    },
    "maxResponseTime": {
        "total": "294",
        "ok": "105",
        "ko": "294"
    },
    "meanResponseTime": {
        "total": "118",
        "ok": "89",
        "ko": "155"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "12",
        "ko": "98"
    },
    "percentiles1": {
        "total": "90",
        "ok": "89",
        "ko": "90"
    },
    "percentiles2": {
        "total": "100",
        "ok": "98",
        "ko": "192"
    },
    "percentiles3": {
        "total": "237",
        "ok": "103",
        "ko": "274"
    },
    "percentiles4": {
        "total": "283",
        "ok": "105",
        "ko": "290"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 57
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
    "count": 3,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.438",
        "ok": "0.25",
        "ko": "0.188"
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
        "ok": "4",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "82"
    },
    "maxResponseTime": {
        "total": "294",
        "ok": "105",
        "ko": "294"
    },
    "meanResponseTime": {
        "total": "118",
        "ok": "89",
        "ko": "155"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "12",
        "ko": "98"
    },
    "percentiles1": {
        "total": "90",
        "ok": "89",
        "ko": "90"
    },
    "percentiles2": {
        "total": "100",
        "ok": "98",
        "ko": "192"
    },
    "percentiles3": {
        "total": "237",
        "ok": "103",
        "ko": "274"
    },
    "percentiles4": {
        "total": "283",
        "ok": "105",
        "ko": "290"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 57
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
    "count": 3,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.438",
        "ok": "0.25",
        "ko": "0.188"
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
