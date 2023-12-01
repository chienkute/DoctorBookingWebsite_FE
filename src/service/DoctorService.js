const fetchAllSchedule = () => {
    return instance.get("api/schedules/?limit=1000&offset=0");
};

export { fetchAllSchedule };