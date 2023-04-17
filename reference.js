states.ModelLookups.push(new Model(
    "Cyprus",
    "Cyprus",
    ["IHEN", "ILAR", "IPAP", "", ""],
    [() => { utils.setModel("IHEN") }, () => { utils.setModel("ILAR") }, () => { utils.setModel("IPAP") }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Reference",
    () => { }
))
states.ModelLookups.push(new Model(
    "IHEN",
    "IHEN",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Cyprus") }, () => {
        states.Datas.DepCode = "IHEN";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Cyprus") }; R.BackID = "Cyprus"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IHEN";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Cyprus") }; R.BackID = "Cyprus"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED CYPRUS", "RWY 17,35", "HELIPAD x0", "", ""],
    "Cyprus",
    () => { }
))
states.ModelLookups.push(new Model(
    "ILAR",
    "ILAR",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Cyprus") }, () => {
        states.Datas.DepCode = "ILAR";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Cyprus") }; R.BackID = "Cyprus"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IHEN";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Cyprus") }; R.BackID = "Cyprus"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED CYPRUS", "RWY 6,24", "HELIPAD x2", "", ""],
    "Cyprus",
    () => { }
))
states.ModelLookups.push(new Model(
    "IPAP",
    "IPAP",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Cyprus") }, () => {
        states.Datas.DepCode = "IPAP";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Cyprus") }; R.BackID = "Cyprus"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IPAP";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Cyprus") }; R.BackID = "Cyprus"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED CYPRUS", "RWY 17,35", "HELIPAD x1", "", ""],
    "Cyprus",
    () => { }
))
states.ModelLookups.push(new Model(
    "Grindavik",
    "Grindavik",
    ["IGRV", "", "", "", ""],
    [() => { utils.setModel("IGRV") }, () => { }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Reference",
    () => { }
))
states.ModelLookups.push(new Model(
    "IGRV",
    "IGRV",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Grindavik") }, () => {
        states.Datas.DepCode = "IGRV";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Grindavik") }; R.BackID = "Grindavik"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IGRV";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Grindavik") }; R.BackID = "Grindavik"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED GRINDAVIK", "RWY 6,24", "HELIPAD x1", "", ""],
    "Grindavik",
    () => { }
))
states.ModelLookups.push(new Model(
    "Izolirani",
    "Izolirani",
    ["IJAF", "IZOL", "ISCM", "", ""],
    [() => { utils.setModel("IJAF") }, () => { utils.setModel("IZOL") }, () => { utils.setModel("ISCM") }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Reference",
    () => { }
))
states.ModelLookups.push(new Model(
    "IJAF",
    "IJAF",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Izolirani") }, () => {
        states.Datas.DepCode = "IGRV";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Izolirani") }; R.BackID = "Izolirani"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IGRV";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Izolirani") }; R.BackID = "Izolirani"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED IZOLIRANI", "RWY 7,25", "HELIPAD x0", "", ""],
    "Izolirani",
    () => { }
))
states.ModelLookups.push(new Model(
    "IZOL",
    "IZOL",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Izolirani") }, () => {
        states.Datas.DepCode = "IZOL";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Izolirani") }; R.BackID = "Izolirani"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IZOL";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Izolirani") }; R.BackID = "Izolirani"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED IZOLIRANI", "RWY 10,28", "HELIPAD x2", "", ""],
    "Izolirani",
    () => { }
))
states.ModelLookups.push(new Model(
    "ISCM",
    "ISCM",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Izolirani") }, () => {
        states.Datas.DepCode = "ISCM";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Izolirani") }; R.BackID = "Izolirani"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "ISCM";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Izolirani") }; R.BackID = "Izolirani"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED IZOLIRANI", "RWY 13,31", "HELIPAD x0", "", ""],
    "Izolirani",
    () => { }
))
states.ModelLookups.push(new Model(
    "Orenji",
    "Orenji",
    ["IDCS", "ITKO", "", "", ""],
    [() => { utils.setModel("IDCS") }, () => { utils.setModel("ITKO") }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Reference",
    () => { }
))
states.ModelLookups.push(new Model(
    "IDCS",
    "IDCS",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Orenji") }, () => {
        states.Datas.DepCode = "IDCS";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Orenji") }; R.BackID = "Orenji"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IDCS";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Orenji") }; R.BackID = "Orenji"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED ORENJI", "RWY 7,25", "HELIPAD x1", "", ""],
    "Orenji",
    () => { }
))
states.ModelLookups.push(new Model(
    "ITKO",
    "ITKO",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Orenji") }, () => {
        states.Datas.DepCode = "ITKO";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Orenji") }; R.BackID = "Orenji"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "ITKO";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Orenji") }; R.BackID = "Orenji"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED ORENJI", "RWY 2,20,13,31", "HELIPAD x3", "", ""],
    "Orenji",
    () => { }
))
states.ModelLookups.push(new Model(
    "Reference (2)",
    "Reference (2)",
    ["Perth", "Rockford", "Saint Barthelemy", "Sauthamptoa", "Skopelos"],
    [() => { utils.setModel("Perth") }, () => { utils.setModel("Rockford") }, () => { utils.setModel("Saint Barthelemy") }, () => { utils.setModel("Sauthamptoa") }, () => { utils.setModel("Skopelos") }],
    ["", "", "", "", ""],
    "Reference",
    () => { }
))
states.ModelLookups.push(new Model(
    "Perth",
    "Perth",
    ["ILKL", "IPPH", "", "", ""],
    [() => { utils.setModel("ILKL") }, () => { utils.setModel("IPPH") }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Reference (2)",
    () => { }
))
states.ModelLookups.push(new Model(
    "ILKL",
    "ILKL",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Perth") }, () => {
        states.Datas.DepCode = "ILKL";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Perth") }; R.BackID = "Perth"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "ILKL";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Perth") }; R.BackID = "Perth"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED PERTH", "RWY 9,27", "HELIPAD x1", "", ""],
    "Perth",
    () => { }
))
states.ModelLookups.push(new Model(
    "IPPH",
    "IPPH",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Perth") }, () => {
        states.Datas.DepCode = "IPPH";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Perth") }; R.BackID = "Perth"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IPPH";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Perth") }; R.BackID = "Perth"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED PERTH", "RWY 11,29,15,33", "HELIPAD x2", "", ""],
    "Perth",
    () => { }
))
states.ModelLookups.push(new Model(
    "Rockford",
    "Rockford",
    ["IGAR", "IBLT", "IRFD", "IMLR", "ITRC"],
    [() => { utils.setModel("IGAR") }, () => { utils.setModel("IBLT") }, () => { utils.setModel("IRFD") }, () => { utils.setModel("IMLR") }, () => { utils.setModel("ITRC") }],
    ["", "", "", "", ""],
    "Reference (2)",
    () => { }
))
states.ModelLookups.push(new Model(
    "IGAR",
    "IGAR",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Rockford") }, () => {
        states.Datas.DepCode = "IGAR";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IGAR";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED ROCKFORD", "RWY 1,19", "HELIPAD x0", "", ""],
    "Rockford",
    () => { }
))
states.ModelLookups.push(new Model(
    "IBLT",
    "IBLT",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Rockford") }, () => {
        states.Datas.DepCode = "IBLT";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IBLT";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED ROCKFORD", "RWY 15,33", "HELIPAD x0", "", ""],
    "Rockford",
    () => { }
))
states.ModelLookups.push(new Model(
    "IRFD",
    "IRFD",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Rockford") }, () => {
        states.Datas.DepCode = "IRFD";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IRFD";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED ROCKFORD", "RWY 18R,36L,18L,36R", "HELIPAD x3", "", ""],
    "Rockford",
    () => { }
))
states.ModelLookups.push(new Model(
    "IMLR",
    "IMLR",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Rockford") }, () => {
        states.Datas.DepCode = "IMLR";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IMLR";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED ROCKFORD", "RWY 11,29", "HELIPAD x1", "", ""],
    "Rockford",
    () => { }
))
states.ModelLookups.push(new Model(
    "ITRC",
    "ITRC",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Rockford") }, () => {
        states.Datas.DepCode = "ITRC";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "ITRC";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Rockford") }; R.BackID = "Rockford"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED ROCKFORD", "RWY 18,36", "HELIPAD x0", "", ""],
    "Rockford",
    () => { }
))
states.ModelLookups.push(new Model(
    "Saint Barthelemy",
    "Saint Barthelemy",
    ["IBTH", "", "", "", ""],
    [() => { utils.setModel("IBTH") }, () => { }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Reference (2)",
    () => { }
))
states.ModelLookups.push(new Model(
    "IBTH",
    "IBTH",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Saint Barthelemy") }, () => {
        states.Datas.DepCode = "IBTH";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Saint Barthelemy") }; R.BackID = "Saint Barthelemy"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "IBTH";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Saint Barthelemy") }; R.BackID = "Saint Barthelemy"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED SAINT BARTHELEMY", "RWY 9,27", "HELIPAD x0", "", ""],
    "Saint Barthelemy",
    () => { }
))
states.ModelLookups.push(new Model(
    "Sauthamptoa",
    "Sauthamptoa",
    ["ISAU", "", "", "", ""],
    [() => { utils.setModel("ISAU") }, () => { }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Reference (2)",
    () => { }
))
states.ModelLookups.push(new Model(
    "ISAU",
    "ISAU",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Sauthamptoa") }, () => {
        states.Datas.DepCode = "ISAU";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Sauthamptoa") }; R.BackID = "Sauthamptoa"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "ISAU";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Sauthamptoa") }; R.BackID = "Sauthamptoa"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED SAUTHAMPTOA", "RWY 8,26", "HELIPAD x1", "", ""],
    "Sauthamptoa",
    () => { }
))
states.ModelLookups.push(new Model(
    "Skopelos",
    "Skopelos",
    ["ISKP", "", "", "", ""],
    [() => { utils.setModel("ISKP") }, () => { }, () => { }, () => { }, () => { }],
    ["", "", "", "", ""],
    "Reference (2)",
    () => { }
))
states.ModelLookups.push(new Model(
    "ISKP",
    "ISKP",
    ["OK", "Depart", "Arrive", "", ""],
    [() => { utils.setModel("Skopelos") }, () => {
        states.Datas.DepCode = "ISKP";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET DEPARTURE AIRPORT CODE TO:"; R.Info[1] = states.Datas.DepCode;
        R.ActionEvent[0] = () => { utils.setModel("Skopelos") }; R.BackID = "Skopelos"; utils.setModel("Routing");
    }, () => {
        states.Datas.ArrCode = "ISKP";
        let R = states.ModelLookups[utils.getArrayID("Routing")]; R.Info[0] = "SET ARRIVAL AIRPORT CODE TO:"; R.Info[1] = states.Datas.ArrCode;
        R.ActionEvent[0] = () => { utils.setModel("Skopelos") }; R.BackID = "Skopelos"; utils.setModel("Routing");
    }, () => { }, () => { }],
    ["LOCATED SKOPELOS", "RWY 5,23", "HELIPAD x0", "", ""],
    "Skopelos",
    () => { }
))