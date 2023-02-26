export interface IBannerCarosuelComponent {
    // id:string
    innerData:IinnerData
    background:Ibackground
    image:Iimage[]
    routeLink:string
    carouselDetails:IcarouselInfo[]
    createdAt:string
    updatedAt:string
}


export interface IinnerData{
    header:string;
    text:string,
    buttonText:string
}
export interface Ibackground{
    url:string,
        alt:string,
}
export interface Iimage{
    url:string,
        alt:string
}
export interface IcarouselInfo{
    name:string,
    description:string
}

/* export class BannerDatas{
    public innerData : IinnerData[]
} */

export interface INoticeConfig {
    _id:string
    noticeTitle: string
    noticeDate: string
    noticeName: string
    updatedAt:string
    createdAt:string
    innerNoticeData: IInnerNoticeData[]
    dashboardInfo: IDashboardInfo[]
}
  
export interface IInnerNoticeData {
    img: string
    noticeInfoText: string
}

export interface IDashboardInfo {
    displayName: string,
}

// ========================================= Research =========================================================

export interface IResearchComponent{
    imageResearch:IResearchImage[],
    infoResearch:IinfoResearch[]
    createdAt:string
    updatedAt:string
    
}

export interface IResearchImage{
    url:string,
    alt:string,
    text:string
}

export interface IinfoResearch{
    name:string,
    description:string
    dataResearch:string
}

// ==============================================Placement==========================================================

export interface IPlacementComponent{
  placementData:IPlacementData[]
  createdAt:string
 updatedAt:string
}

export interface IPlacementData{
    name:string
    url:string
    alt:string
    post:string
    facultyName:string
  } 
  