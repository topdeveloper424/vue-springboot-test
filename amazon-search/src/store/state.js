let today = new Date()
let dateStr = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

export default {
    lastHistories : [],
    missingDates: [],
    searchParams: {
        searchTerm: '',
        contextDate: dateStr,
        targets:{
            searchTermChecked: 1,
    
            allTitleChecked: 0,
            allClickNumber:0,
            allClickSelect:0,
            allConvNumber:0,
            allConvSelect:0,
            
            titleChecked: 0,
            clickNumber:0,
            clickSelect:0,
            convNumber:0,
            convSelect:0,
    
            asinChecked: 0,
          },
        trends:{
            seasonalChecked: 0,
            seasonalNumber1:0,
            seasonalNumber2:0,
            seasonalOver:0,
    
            regressionChecked : 0,
            regressionNumber1:0,
            regressionNumber2:0,
            regressionOver:0,
        },
        filters:{
            rankChecked: 0,
            rankNumber1:0,
            rankNumber2:0,
    
            totalClickChecked: 0,
            totalClickNumber1:0,
            totalClickNumber2:0,
    
            totalConvChecked: 0,
            totalConvNumber1:0,
            totalConvNumber2:0,
    
            clickChecked: 0,
            clickNumber1:0,
            clickNumber2:0,
    
            convChecked: 0,
            convNumber1:0,
            convNumber2:0,
            trendingChecked:0
        }
    }
}
