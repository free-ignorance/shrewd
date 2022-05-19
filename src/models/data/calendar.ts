// Static json representations of the lunar phases.
// years 2021 and 2022 for right now... i want to just get through this year and experiment with the data structure.
// the data should be good for the next 100 years if there isn't a solar event that changes orbits :P
const moonPhaseCalendar = {
	2021: {
		0: {
			month: 0,
			days: 12,
			start_day: "2021-01-01T00:00:00",
			phases: [
				{
					 phase: -1,
					 days: 5,
					 date_time: "2021-01-01T00:00:00",
					 start_day: "2021-01-01T00:00:00",
					 end_day: "2021-01-05T00:00:00"
				},
				{
					 phase: 3,
					 days: 7,
					 date_time: "2021-01-06T09:37:00",
					 start_day: "2021-01-06T00:00:00",
					 end_day: "2021-01-12T00:00:00"
				}
		 ],
		},
		1: {
			month: 1,
			days: 29,
			start_day: "2021-01-13T00:00:00",
			phases: [
				{
					phase: 1,
					days: 7,
					date_time: "2021-01-13T05:00:00",
					start_day: "2021-01-13T00:00:00",
					end_day: "2021-01-19T00:00:00"
				},
				{
					phase: 1,
					days: 8,
					date_time: "2021-01-20T21:01:00",
					start_day: "2021-01-20T00:00:00",
					end_day: "2021-01-27T00:00:00"
				},
				{
					phase: 2,
					days: 7,
					date_time: "2021-01-28T19:16:00",
					start_day: "2021-01-28T00:00:00",
					end_day: "2021-02-03T00:00:00"
				},
				{
					phase: 3,
					days: 7,
					date_time: "2021-02-04T17:37:00",
					start_day: "2021-02-04T00:00:00",
					end_day: "2021-02-10T00:00:00"
				}
			],
		},
		2: {
			month: 2,
			days: 28,
			start_day: "2021-02-11T00:00:00",
			phases: [
				{
					 phase: 0,
					 days: 8,
					 date_time: "2021-02-11T19:06:00",
					 start_day: "2021-02-11T00:00:00",
					 end_day: "2021-02-18T00:00:00"
				},
				{
					 phase: 1,
					 days: 8,
					 date_time: "2021-02-19T18:47:00",
					 start_day: "2021-02-19T00:00:00",
					 end_day: "2021-02-26T00:00:00"
				},
				{
					 phase: 2,
					 days: 7,
					 date_time: "2021-02-27T08:17:00",
					 start_day: "2021-02-27T00:00:00",
					 end_day: "2021-03-05T00:00:00"
				},
				{
					 phase: 3,
					 days: 7,
					 date_time: "2021-03-06T01:30:00",
					 start_day: "2021-03-06T00:00:00",
					 end_day: "2021-03-12T00:00:00"
				}
		 ]
		},
		3: {
			month: 3,
			days: 30,
			start_day: "2021-03-13T00:00:00",
			phases: [
				 {
						phase: 0,
						days: 8,
						date_time: "2021-03-13T10:21:00",
						start_day: "2021-03-13T00:00:00",
						end_day: "2021-03-20T00:00:00"
				 },
				 {
						phase: 1,
						days: 7,
						date_time: "2021-03-21T14:40:00",
						start_day: "2021-03-21T00:00:00",
						end_day: "2021-03-27T00:00:00"
				 },
				 {
						phase: 2,
						days: 7,
						date_time: "2021-03-28T18:48:00",
						start_day: "2021-03-28T00:00:00",
						end_day: "2021-04-03T00:00:00"
				 },
				 {
						phase: 3,
						days: 8,
						date_time: "2021-04-04T10:02:00",
						start_day: "2021-04-04T00:00:00",
						end_day: "2021-04-11T00:00:00"
				 }
			]
	 },
	 4: {
		month: 4,
		days: 29,
		start_day: "2021-04-12T00:00:00",
		phases: [
			 {
					phase: 0,
					days: 8,
					date_time: "2021-04-12T02:31:00",
					start_day: "2021-04-12T00:00:00",
					end_day: "2021-04-19T00:00:00"
			 },
			 {
					phase: 1,
					days: 7,
					date_time: "2021-04-20T06:59:00",
					start_day: "2021-04-20T00:00:00",
					end_day: "2021-04-26T00:00:00"
			 },
			 {
					phase: 2,
					days: 6,
					date_time: "2021-04-27T03:31:00",
					start_day: "2021-04-27T00:00:00",
					end_day: "2021-05-02T00:00:00"
			 },
			 {
					phase: 3,
					days: 8,
					date_time: "2021-05-03T19:50:00",
					start_day: "2021-05-03T00:00:00",
					end_day: "2021-05-10T00:00:00"
			 }
			]
		},
		5: {
			month: 5,
			days: 30,
			start_day: "2021-05-11T00:00:00",
			phases: [
				{
						phase: 0,
						days: 8,
						date_time: "2021-05-11T19:00:00",
						start_day: "2021-05-11T00:00:00",
						end_day: "2021-05-18T00:00:00"
				},
				{
						phase: 1,
						days: 7,
						date_time: "2021-05-19T19:13:00",
						start_day: "2021-05-19T00:00:00",
						end_day: "2021-05-25T00:00:00"
				},
				{
						phase: 2,
						days: 7,
						date_time: "2021-05-26T11:14:00",
						start_day: "2021-05-26T00:00:00",
						end_day: "2021-06-01T00:00:00"
				},
				{
						phase: 3,
						days: 8,
						date_time: "2021-06-02T07:24:00",
						start_day: "2021-06-02T00:00:00",
						end_day: "2021-06-09T00:00:00"
				}
			]
		},
		6: {
			month: 6,
			days: 30,
			start_day: "2021-06-10T00:00:00",
			phases: [
				{
						phase: 0,
						days: 8,
						date_time: "2021-06-10T10:53:00",
						start_day: "2021-06-10T00:00:00",
						end_day: "2021-06-17T00:00:00"
				},
				{
						phase: 1,
						days: 6,
						date_time: "2021-06-18T03:54:00",
						start_day: "2021-06-18T00:00:00",
						end_day: "2021-06-23T00:00:00"
				},
				{
						phase: 2,
						days: 7,
						date_time: "2021-06-24T18:40:00",
						start_day: "2021-06-24T00:00:00",
						end_day: "2021-06-30T00:00:00"
				},
				{
						phase: 3,
						days: 9,
						date_time: "2021-07-01T21:11:00",
						start_day: "2021-07-01T00:00:00",
						end_day: "2021-07-09T00:00:00"
				}
			],
		},
		7: {
			month: 7,
			days: 29,
			start_day: "2021-07-10T00:00:00",
			phases: [
				{
						phase: 0,
						days: 7,
						date_time: "2021-07-10T01:17:00",
						start_day: "2021-07-10T00:00:00",
						end_day: "2021-07-16T00:00:00"
				},
				{
						phase: 1,
						days: 7,
						date_time: "2021-07-17T10:11:00",
						start_day: "2021-07-17T00:00:00",
						end_day: "2021-07-23T00:00:00"
				},
				{
						phase: 2,
						days: 7,
						date_time: "2021-07-24T02:37:00",
						start_day: "2021-07-24T00:00:00",
						end_day: "2021-07-30T00:00:00"
				},
				{
						phase: 3,
						days: 8,
						date_time: "2021-07-31T13:16:00",
						start_day: "2021-07-31T00:00:00",
						end_day: "2021-08-07T00:00:00"
				}
			],
		},
		8: {
			month: 8,
			days: 30,
			start_day: "2021-08-08T00:00:00",
			phases: [
				{
						phase: 0,
						days: 7,
						date_time: "2021-08-08T13:50:00",
						start_day: "2021-08-08T00:00:00",
						end_day: "2021-08-14T00:00:00"
				},
				{
						phase: 1,
						days: 7,
						date_time: "2021-08-15T15:19:00",
						start_day: "2021-08-15T00:00:00",
						end_day: "2021-08-21T00:00:00"
				},
				{
						phase: 2,
						days: 8,
						date_time: "2021-08-22T12:02:00",
						start_day: "2021-08-22T00:00:00",
						end_day: "2021-08-29T00:00:00"
				},
				{
						phase: 3,
						days: 8,
						date_time: "2021-08-30T07:13:00",
						start_day: "2021-08-30T00:00:00",
						end_day: "2021-09-06T00:00:00"
				}
			]
		},
		9: {
			month: 9,
			days: 29,
			start_day: "2021-09-07T00:00:00",
			phases: [
				{
						phase: 0,
						days: 6,
						date_time: "2021-09-07T00:52:00",
						start_day: "2021-09-07T00:00:00",
						end_day: "2021-09-12T00:00:00"
				},
				{
						phase: 1,
						days: 7,
						date_time: "2021-09-13T20:39:00",
						start_day: "2021-09-13T00:00:00",
						end_day: "2021-09-19T00:00:00"
				},
				{
						phase: 2,
						days: 9,
						date_time: "2021-09-20T23:55:00",
						start_day: "2021-09-20T00:00:00",
						end_day: "2021-09-28T00:00:00"
				},
				{
						phase: 3,
						days: 7,
						date_time: "2021-09-29T01:57:00",
						start_day: "2021-09-29T00:00:00",
						end_day: "2021-10-05T00:00:00"
				}
			]
		},
		10: {
			month: 10,
			days: 29,
			start_day: "2021-10-06T00:00:00",
			phases: [
				{
						phase: 0,
						days: 7,
						date_time: "2021-10-06T11:05:00",
						start_day: "2021-10-06T00:00:00",
						end_day: "2021-10-12T00:00:00"
				},
				{
						phase: 1,
						days: 7,
						date_time: "2021-10-13T03:25:00",
						start_day: "2021-10-13T00:00:00",
						end_day: "2021-10-19T00:00:00"
				},
				{
						phase: 2,
						days: 8,
						date_time: "2021-10-20T14:57:00",
						start_day: "2021-10-20T00:00:00",
						end_day: "2021-10-27T00:00:00"
				},
				{
						phase: 3,
						days: 7,
						date_time: "2021-10-28T20:05:00",
						start_day: "2021-10-28T00:00:00",
						end_day: "2021-11-03T00:00:00"
				}
			]
		},
		11: {
			month: 11,
			days: 30,
			start_day: "2021-11-04T00:00:00",
			phases: [
				{
						phase: 0,
						days: 7,
						date_time: "2021-11-04T21:14:00",
						start_day: "2021-11-04T00:00:00",
						end_day: "2021-11-10T00:00:00"
				},
				{
						phase: 1,
						days: 8,
						date_time: "2021-11-11T12:46:00",
						start_day: "2021-11-11T00:00:00",
						end_day: "2021-11-18T00:00:00"
				},
				{
						phase: 2,
						days: 8,
						date_time: "2021-11-19T08:57:00",
						start_day: "2021-11-19T00:00:00",
						end_day: "2021-11-26T00:00:00"
				},
				{
						phase: 3,
						days: 7,
						date_time: "2021-11-27T12:28:00",
						start_day: "2021-11-27T00:00:00",
						end_day: "2021-12-03T00:00:00"
				}
			]
		},
		12: {
			month: 12,
			days: 28,
			start_day: "2021-12-04T00:00:00",
			phases: [
				{
						phase: 0,
						days: 7,
						date_time: "2021-12-04T07:43:00",
						start_day: "2021-12-04T00:00:00",
						end_day: "2021-12-10T00:00:00"
				},
				{
						phase: 1,
						days: 8,
						date_time: "2021-12-11T01:35:00",
						start_day: "2021-12-11T00:00:00",
						end_day: "2021-12-18T00:00:00"
				},
				{
						phase: 2,
						days: 8,
						date_time: "2021-12-19T04:35:00",
						start_day: "2021-12-19T00:00:00",
						end_day: "2021-12-26T00:00:00"
				},
				{
						phase: 3,
						days: 5,
						date_time: "2021-12-27T02:24:00",
						start_day: "2021-12-27T00:00:00",
						end_day: "2021-12-31T00:00:00"
				}
			]
		}
	},
	2022: {
		0: {
			month: 0,
			days: 1,
			start_day: "2022-01-01T00:00:00",
			 phases: [
					{
						 phase: -1,
						 days: 1,
						 date_time: "2022-01-01T00:00:00",
						 start_day: "2022-01-01T00:00:00",
						 end_day: "2022-01-01T00:00:00"
					}
			 ]
		},
		1: {
			month: 1,
			days: 30,
			start_day: "2022-01-02T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 7,
						 date_time: "2022-01-02T18:33:00",
						 start_day: "2022-01-02T00:00:00",
						 end_day: "2022-01-08T00:00:00"
					},
					{
						 phase: 1,
						 days: 8,
						 date_time: "2022-01-09T18:11:00",
						 start_day: "2022-01-09T00:00:00",
						 end_day: "2022-01-16T00:00:00"
					},
					{
						 phase: 2,
						 days: 8,
						 date_time: "2022-01-17T23:48:00",
						 start_day: "2022-01-17T00:00:00",
						 end_day: "2022-01-24T00:00:00"
					},
					{
						 phase: 3,
						 days: 7,
						 date_time: "2022-01-25T13:41:00",
						 start_day: "2022-01-25T00:00:00",
						 end_day: "2022-01-31T00:00:00"
					}
			 ]
		},
		2: {
			month: 2,
			days: 29,
			start_day: "2022-02-01T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 7,
						 date_time: "2022-02-01T05:46:00",
						 start_day: "2022-02-01T00:00:00",
						 end_day: "2022-02-07T00:00:00"
					},
					{
						 phase: 1,
						 days: 8,
						 date_time: "2022-02-08T13:50:00",
						 start_day: "2022-02-08T00:00:00",
						 end_day: "2022-02-15T00:00:00"
					},
					{
						 phase: 2,
						 days: 7,
						 date_time: "2022-02-16T16:56:00",
						 start_day: "2022-02-16T00:00:00",
						 end_day: "2022-02-22T00:00:00"
					},
					{
						 phase: 3,
						 days: 7,
						 date_time: "2022-02-23T22:32:00",
						 start_day: "2022-02-23T00:00:00",
						 end_day: "2022-03-01T00:00:00"
					}
			 ]
		},
		3:
		{
			month: 3,
			days: 30,
			start_day: "2022-03-02T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 8,
						 date_time: "2022-03-02T17:35:00",
						 start_day: "2022-03-02T00:00:00",
						 end_day: "2022-03-09T00:00:00"
					},
					{
						 phase: 1,
						 days: 8,
						 date_time: "2022-03-10T10:45:00",
						 start_day: "2022-03-10T00:00:00",
						 end_day: "2022-03-17T00:00:00"
					},
					{
						 phase: 2,
						 days: 7,
						 date_time: "2022-03-18T07:17:00",
						 start_day: "2022-03-18T00:00:00",
						 end_day: "2022-03-24T00:00:00"
					},
					{
						 phase: 3,
						 days: 7,
						 date_time: "2022-03-25T05:37:00",
						 start_day: "2022-03-25T00:00:00",
						 end_day: "2022-03-31T00:00:00"
					}
			 ]
		},
		4:
		{
			month: 4,
			days: 29,
			start_day: "2022-04-01T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 8,
						 date_time: "2022-04-01T06:24:00",
						 start_day: "2022-04-01T00:00:00",
						 end_day: "2022-04-08T00:00:00"
					},
					{
						 phase: 1,
						 days: 7,
						 date_time: "2022-04-09T06:48:00",
						 start_day: "2022-04-09T00:00:00",
						 end_day: "2022-04-15T00:00:00"
					},
					{
						 phase: 2,
						 days: 7,
						 date_time: "2022-04-16T18:55:00",
						 start_day: "2022-04-16T00:00:00",
						 end_day: "2022-04-22T00:00:00"
					},
					{
						 phase: 3,
						 days: 7,
						 date_time: "2022-04-23T11:56:00",
						 start_day: "2022-04-23T00:00:00",
						 end_day: "2022-04-29T00:00:00"
					}
			 ]
		},
		5:
		{
			month: 5,
			days: 30,
			start_day: "2022-04-30T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 9,
						 date_time: "2022-04-30T20:28:00",
						 start_day: "2022-04-30T00:00:00",
						 end_day: "2022-05-08T00:00:00"
					},
					{
						 phase: 1,
						 days: 7,
						 date_time: "2022-05-09T00:21:00",
						 start_day: "2022-05-09T00:00:00",
						 end_day: "2022-05-15T00:00:00"
					},
					{
						 phase: 2,
						 days: 6,
						 date_time: "2022-05-16T04:14:00",
						 start_day: "2022-05-16T00:00:00",
						 end_day: "2022-05-21T00:00:00"
					},
					{
						 phase: 3,
						 days: 8,
						 date_time: "2022-05-22T18:43:00",
						 start_day: "2022-05-22T00:00:00",
						 end_day: "2022-05-29T00:00:00"
					}
			 ]
		},
		6:
		{
			month: 6,
			days: 30,
			start_day: "2022-05-30T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 8,
						 date_time: "2022-05-30T11:30:00",
						 start_day: "2022-05-30T00:00:00",
						 end_day: "2022-06-06T00:00:00"
					},
					{
						 phase: 1,
						 days: 7,
						 date_time: "2022-06-07T14:48:00",
						 start_day: "2022-06-07T00:00:00",
						 end_day: "2022-06-13T00:00:00"
					},
					{
						 phase: 2,
						 days: 7,
						 date_time: "2022-06-14T11:52:00",
						 start_day: "2022-06-14T00:00:00",
						 end_day: "2022-06-20T00:00:00"
					},
					{
						 phase: 3,
						 days: 8,
						 date_time: "2022-06-21T03:11:00",
						 start_day: "2022-06-21T00:00:00",
						 end_day: "2022-06-28T00:00:00"
					}
			 ]
		},
		7:
		{
			month: 7,
			days: 29,
			start_day: "2022-06-29T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 8,
						 date_time: "2022-06-29T02:52:00",
						 start_day: "2022-06-29T00:00:00",
						 end_day: "2022-07-06T00:00:00"
					},
					{
						 phase: 1,
						 days: 6,
						 date_time: "2022-07-07T02:14:00",
						 start_day: "2022-07-07T00:00:00",
						 end_day: "2022-07-12T00:00:00"
					},
					{
						 phase: 2,
						 days: 7,
						 date_time: "2022-07-13T18:38:00",
						 start_day: "2022-07-13T00:00:00",
						 end_day: "2022-07-19T00:00:00"
					},
					{
						 phase: 3,
						 days: 8,
						 date_time: "2022-07-20T14:19:00",
						 start_day: "2022-07-20T00:00:00",
						 end_day: "2022-07-27T00:00:00"
					}
			 ]
		},
		8:
		{
			month: 8,
			days: 30,
			start_day: "2022-07-28T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 8,
						 date_time: "2022-07-28T17:55:00",
						 start_day: "2022-07-28T00:00:00",
						 end_day: "2022-08-04T00:00:00"
					},
					{
						 phase: 1,
						 days: 7,
						 date_time: "2022-08-05T11:06:00",
						 start_day: "2022-08-05T00:00:00",
						 end_day: "2022-08-11T00:00:00"
					},
					{
						 phase: 2,
						 days: 7,
						 date_time: "2022-08-12T01:36:00",
						 start_day: "2022-08-12T00:00:00",
						 end_day: "2022-08-18T00:00:00"
					},
					{
						 phase: 3,
						 days: 8,
						 date_time: "2022-08-19T04:36:00",
						 start_day: "2022-08-19T00:00:00",
						 end_day: "2022-08-26T00:00:00"
					}
			 ]
		},
		9:
		{
			month: 9,
			days: 29,
			start_day: "2022-08-27T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 7,
						 date_time: "2022-08-27T08:17:00",
						 start_day: "2022-08-27T00:00:00",
						 end_day: "2022-09-02T00:00:00"
					},
					{
						 phase: 1,
						 days: 7,
						 date_time: "2022-09-03T18:08:00",
						 start_day: "2022-09-03T00:00:00",
						 end_day: "2022-09-09T00:00:00"
					},
					{
						 phase: 2,
						 days: 7,
						 date_time: "2022-09-10T09:59:00",
						 start_day: "2022-09-10T00:00:00",
						 end_day: "2022-09-16T00:00:00"
					},
					{
						 phase: 3,
						 days: 8,
						 date_time: "2022-09-17T21:52:00",
						 start_day: "2022-09-17T00:00:00",
						 end_day: "2022-09-24T00:00:00"
					}
			 ]
		},
		10:
		{
			month: 10,
			days: 30,
			start_day: "2022-09-25T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 8,
						 date_time: "2022-09-25T21:54:00",
						 start_day: "2022-09-25T00:00:00",
						 end_day: "2022-10-02T00:00:00"
					},
					{
						 phase: 1,
						 days: 6,
						 date_time: "2022-10-03T00:14:00",
						 start_day: "2022-10-03T00:00:00",
						 end_day: "2022-10-08T00:00:00"
					},
					{
						 phase: 2,
						 days: 8,
						 date_time: "2022-10-09T20:55:00",
						 start_day: "2022-10-09T00:00:00",
						 end_day: "2022-10-16T00:00:00"
					},
					{
						 phase: 3,
						 days: 8,
						 date_time: "2022-10-17T17:15:00",
						 start_day: "2022-10-17T00:00:00",
						 end_day: "2022-10-24T00:00:00"
					}
			 ]
		},
		11:
		{
			month: 11,
			days: 29,
			start_day: "2022-10-25T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 7,
						 date_time: "2022-10-25T10:49:00",
						 start_day: "2022-10-25T00:00:00",
						 end_day: "2022-10-31T00:00:00"
					},
					{
						 phase: 1,
						 days: 7,
						 date_time: "2022-11-01T06:37:00",
						 start_day: "2022-11-01T00:00:00",
						 end_day: "2022-11-07T00:00:00"
					},
					{
						 phase: 2,
						 days: 8,
						 date_time: "2022-11-08T11:02:00",
						 start_day: "2022-11-08T00:00:00",
						 end_day: "2022-11-15T00:00:00"
					},
					{
						 phase: 3,
						 days: 7,
						 date_time: "2022-11-16T13:27:00",
						 start_day: "2022-11-16T00:00:00",
						 end_day: "2022-11-22T00:00:00"
					}
			 ]
		},
		12:
		{
			month: 12,
			days: 30,
			start_day: "2022-11-23T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 7,
						 date_time: "2022-11-23T22:57:00",
						 start_day: "2022-11-23T00:00:00",
						 end_day: "2022-11-29T00:00:00"
					},
					{
						 phase: 1,
						 days: 8,
						 date_time: "2022-11-30T14:36:00",
						 start_day: "2022-11-30T00:00:00",
						 end_day: "2022-12-07T00:00:00"
					},
					{
						 phase: 2,
						 days: 8,
						 date_time: "2022-12-08T04:08:00",
						 start_day: "2022-12-08T00:00:00",
						 end_day: "2022-12-15T00:00:00"
					},
					{
						 phase: 3,
						 days: 7,
						 date_time: "2022-12-16T08:56:00",
						 start_day: "2022-12-16T00:00:00",
						 end_day: "2022-12-22T00:00:00"
					}
			 ]
		},
		13:
		{
			month: 13,
			days: 9,
			start_day: "2022-12-23T00:00:00",
			 phases: [
					{
						 phase: 0,
						 days: 7,
						 date_time: "2022-12-23T10:17:00",
						 start_day: "2022-12-23T00:00:00",
						 end_day: "2022-12-29T00:00:00"
					},
					{
						 phase: 1,
						 days: 2,
						 date_time: "2022-12-30T01:20:00",
						 start_day: "2022-12-30T00:00:00",
						 end_day: "2022-12-31T00:00:00"
					}
			 ]
		}
	}
};

module.exports = {
	calendar: moonPhaseCalendar
}