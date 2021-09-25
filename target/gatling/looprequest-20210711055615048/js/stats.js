var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "percentiles1": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "percentiles2": {
        "total": "557",
        "ok": "557",
        "ko": "-"
    },
    "percentiles3": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "percentiles4": {
        "total": "668",
        "ok": "668",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.667",
        "ko": "-"
    }
},
contents: {
"req_get-all-users-r-8e438": {
        type: "REQUEST",
        name: "get all users request",
path: "get all users request",
pathFormatted: "req_get-all-users-r-8e438",
stats: {
    "name": "get all users request",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "387",
        "ok": "387",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "287",
        "ok": "287",
        "ko": "-"
    },
    "percentiles1": {
        "total": "387",
        "ok": "387",
        "ko": "-"
    },
    "percentiles2": {
        "total": "530",
        "ok": "530",
        "ko": "-"
    },
    "percentiles3": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "percentiles4": {
        "total": "667",
        "ok": "667",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
    }
}
    },"req_add-user-reques-55e48": {
        type: "REQUEST",
        name: "Add user request",
path: "Add user request",
pathFormatted: "req_add-user-reques-55e48",
stats: {
    "name": "Add user request",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "383",
        "ok": "383",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "518",
        "ok": "518",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles1": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "percentiles2": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles3": {
        "total": "511",
        "ok": "511",
        "ko": "-"
    },
    "percentiles4": {
        "total": "517",
        "ok": "517",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
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
