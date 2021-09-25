var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "105",
        "ok": "64",
        "ko": "41"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "67",
        "ko": "66"
    },
    "maxResponseTime": {
        "total": "450",
        "ok": "450",
        "ko": "436"
    },
    "meanResponseTime": {
        "total": "139",
        "ok": "132",
        "ko": "150"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "96",
        "ko": "126"
    },
    "percentiles1": {
        "total": "90",
        "ok": "94",
        "ko": "87"
    },
    "percentiles2": {
        "total": "109",
        "ok": "109",
        "ko": "102"
    },
    "percentiles3": {
        "total": "400",
        "ok": "376",
        "ko": "406"
    },
    "percentiles4": {
        "total": "435",
        "ok": "429",
        "ko": "429"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 64,
    "percentage": 61
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
    "count": 41,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.2",
        "ok": "2.56",
        "ko": "1.64"
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
        "total": "105",
        "ok": "64",
        "ko": "41"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "67",
        "ko": "66"
    },
    "maxResponseTime": {
        "total": "450",
        "ok": "450",
        "ko": "436"
    },
    "meanResponseTime": {
        "total": "139",
        "ok": "132",
        "ko": "150"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "96",
        "ko": "126"
    },
    "percentiles1": {
        "total": "90",
        "ok": "94",
        "ko": "87"
    },
    "percentiles2": {
        "total": "109",
        "ok": "109",
        "ko": "102"
    },
    "percentiles3": {
        "total": "400",
        "ok": "376",
        "ko": "406"
    },
    "percentiles4": {
        "total": "435",
        "ok": "429",
        "ko": "429"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 64,
    "percentage": 61
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
    "count": 41,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.2",
        "ok": "2.56",
        "ko": "1.64"
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
