//Wireless Common
//调用的页面需要先获取以下参数
//CountyCode，Region，DFS_Enable ，
//CountryRegion=5   CountryRegionABand=7    这2个参数一直保持不要改变， 驱动用的
//CountryCode  页面显示的Channel数量根据这个来决定。

//国家区域对应的 CountryRegion 可以通过MTK的表格查找
//用于列表显示用, 可以在这里增加国家代码, 但是加了之后要同时将CountryRegionList, TriCountryRegionList, RDRegionList 更新
var CountryCodelist=new Array();
CountryCodelist["WO"] = "Global"; 
CountryCodelist["US"]= "FCC(US)";
CountryCodelist["EU"] = "CE/ETSI(EU)";
CountryCodelist["CN"] = "CHINA(CN)";
CountryCodelist["HK"] = "HongKong(HK)";
CountryCodelist["TW"] = "TAIWAN";
CountryCodelist["JP"] = "JAPAN(JP)";
CountryCodelist["FR"] = "FRANCE(FR)";
CountryCodelist["IE"] = "IRELAND";
CountryCodelist["AU"] = "AUSTRALIA(AU)";

//通过CountyRegionList来决定选择 2G 5G的CountryRegion
//然后通过CountryRegion来判断AutoChannel 应该跳过哪些Channel
var CountryRegionList=new Array();
CountryRegionList["WO"] = "5,7"; //对应CountryRegion的 "2G,5G" 列表 
CountryRegionList["EU"] = "1,1";
CountryRegionList["US"]= "0,0";
CountryRegionList["CN"] = "1,0";
CountryRegionList["HK"] = "1,0";
CountryRegionList["TW"] = "0,3";
CountryRegionList["JP"] = "5,9";
CountryRegionList["AU"]= "0,0";
CountryRegionList["CA"]= "0,0";
CountryRegionList["RU"]= "0,11";
CountryRegionList["IN"]= "0,0"; 
CountryRegionList["SG"]= "0,0";
CountryRegionList["ZA"]= "0,12";

var TriCountryRegionList=new Array();
TriCountryRegionList["WO"] = "5,2,5"; //对应Region的 "2G,5G,5G2" 列表 
TriCountryRegionList["EU"] = "1,2,23";
TriCountryRegionList["US"] = "0,2,5";
TriCountryRegionList["CN"] = "1,2,5";
TriCountryRegionList["HK"] = "1,2,5";
TriCountryRegionList["TW"] = "0,2,5";
TriCountryRegionList["JP"] = "5,2,23";
TriCountryRegionList["FR"] = "1,2,23";
TriCountryRegionList["IE"] = "1,2,23";
TriCountryRegionList["AU"] = "0,2,5";

//频宽160MHz需要的信道
var BandWidthList=new Array();
BandWidthList["WO"] = "2"; 
BandWidthList["EU"] = "2";
BandWidthList["US"] = "0";
BandWidthList["CN"] = "2";
BandWidthList["TW"] = "0";
BandWidthList["JP"] = "0";
BandWidthList["AU"] = "1";
BandWidthList["CA"] = "1";
BandWidthList["RU"] = "2";
BandWidthList["IN"] = "2"; 
BandWidthList["SG"] = "1";
BandWidthList["ZA"] = "2";

var RDRegionList=new Array();
RDRegionList["FCC"]="WO,US,TW,HK,CN,AU";
RDRegionList["CE"]="EU,FR,IE";
RDRegionList["JAP"]="JP";

//##### 无线区域定义，如果没有自己加列表
var Region2 =  "1,2,3,4,5,6,7,8,9,10,11";  //US,CN,HK,CHILI +DFS
var Region5 = "36,40,44,48,52,56,60,64,100,104,108,112,116,120,124,128,132,136,140,144,149,153,157,161,165"; //WO Global


//##### 排除跳信道
SkipList2 = "12;13;14;";  //2G直接写入配置文件即可
// 5G SkipList  默认写这部分到Flash AutoChannelSkipList="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;"

//5G SkipList 根据DFS , Region 参数直接选择对应的列表保存到Flash即可
var SkipList5 = new Array(); //DFS ON/OFF
SkipList5[0] = new Array();  //[DFS][Region]
SkipList5[1] = new Array();

SkipList5[0][0]="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;165;";  //FCC     
SkipList5[1][0]="100;104;108;112;116;120;124;128;132;136;140;144;165;";

SkipList5[0][1]="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;149;153;157;161;165;"; //CE
SkipList5[1][1]="144;149;153;157;161;165;";

SkipList5[0][2]="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;149;153;157;161;165;"; //FR
SkipList5[1][2]="100;104;108;112;116;120;124;128;132;136;140;144;149;153;157;161;165;";

SkipList5[0][3]="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;165;"; //TW
SkipList5[1][3]="100;104;108;112;116;120;124;128;132;136;140;144;165;";

SkipList5[0][7]="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;149;153;157;161;165;"; //WO
SkipList5[1][7]="100;104;108;112;116;120;124;128;132;136;140;144;165;";

SkipList5[0][9]="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;149;153;157;161;165;"; //JP
SkipList5[1][9]="120;124;128;144;149;153;157;161;165;";

SkipList5[0][10]="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;165;"; //CN
SkipList5[1][10]="52;56;60;64;100;104;108;112;116;120;124;128;132;136;140;144;165;";


SkipList5[0][11]="100;104;108;112;116;120;124;128;144;165;"; //RU don't support DFS
SkipList5[1][11]="100;104;108;112;116;120;124;128;144;165;";

SkipList5[0][12]="36;40;44;48;52;56;60;64;144;149;153;157;161;165;"; //ZA
SkipList5[1][12]="144;149;153;157;161;165;";

var HighBandWidth5 = new Array();
HighBandWidth5[0]="36 40 44 48 52 56 60 64 100 104 108 112 116 120 124 128";
HighBandWidth5[1]="36 40 44 48 52 56 60 64 100 104 108 112";
HighBandWidth5[2]="36 40 44 48 52 56 60 64";



//alert (SkipList5[0][7]);

var TriSkipList5 = new Array(); //DFS ON/OFF
TriSkipList5[0]="52;56;60;64;"; //低频
TriSkipList5[1]="132;136;140;144;"; //高频
//##### Dual 5G Band1/2  Band3/4划分     不用做Auto Channel
var Region51=new Array();
var Region52=new Array();

//CE  DFS=1   EU/FR/IE
Region51[2]="36,40,44,48,52,56,60,64"; //Band1  Default 36
Region52[23]="100,104,108,112,116,120,124,128"; //Band3  Default 100

//FCC DFS=0  WO/US/CN/HK/TW/JP
Region51[2]="36,40,44,48,52,56,60,64"; //Band1  Default 36
Region52[5]="149,153,157,161"; //Band4  Default 149

Region52[24]="100,104,108,112,116,120,124,128,149,153,157,161,165"; //Extender固定, 高段FCC+DFS开 无DFS选项  默认Auto， 165是20MHz


function TriBandRegion(CountryRegion){ 
	var FCC="WO-US-CN-HK-TW-AU";
	var CE="EU-FR-IE-JP";
	if (FCC.indexOf(CountryRegion)>-1) 
	{
		return 0;
	}
	if (CE.indexOf(CountryRegion)>-1) 
	{
		return 1;
	}
	return NULL;
}


var region_cur=new Array();;
var tri_region_cur=new Array();;

function showDomain(id,CntyCd ) {
	var idx=0;
	get_by_id(id).options[idx++]=new Option(WiFi.global, "WO", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.us, "US", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.eu, "EU", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.jp, "JP", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.fr, "FR", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.cn,"CN", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.hk,"HK", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.tw,"TW", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.ie,"IE", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.au, "AU", false, false);		
	for( var i=0;i<idx;i++)	{
		if (get_by_id(id).options[i].value==CntyCd){
			get_by_id(id).selectedIndex=i;
			region_cur=CountryRegionList[CntyCd];
			region_cur=region_cur.split(",");
		}
	}
}
/*
function TrishowDomain(id,CntyCd ) {
	var idx=0;
	
	get_by_id(id).options[idx++]=new Option(WiFi.us, "US", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.eu, "EU", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.jp, "JP", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.fr, "FR", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.cn,"CN", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.hk,"HK", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.tw,"TW", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.ie,"IE", false, false);
	get_by_id(id).options[idx++]=new Option(WiFi.au, "AU", false, false);		
	for( var i=0;i<idx;i++)	{
		if (get_by_id(id).options[i].value==CntyCd){
			get_by_id(id).selectedIndex=i;
			tri_region_cur=TriCountryRegionList[CntyCd];
			tri_region_cur=tri_region_cur.split(",");
		}
	}
}
*/
function showChannel2G(id, Channel) {  // 2G Channel List
	$(id).empty();
	if (Channel == 0)
		$(id).append("<option value='0' selected>" + $.t("lblChannelAuto") + "</option>");
	else
		$(id).append("<option value='0'>" + $.t("lblChannelAuto") + "</option>");
	
	var strs= new Array();
	strs = Region2.split(","); 
	for (i = 0;i < strs.length; i++ )  { 
		if (strs[i] == Channel)
			$(id).append("<option value=" + strs[i] + " selected>"+ strs[i] +"</option>");
		else
			$(id).append("<option value=" + strs[i]+ ">" + strs[i] +"</option>");
	}
	return;
}


function showChannel5G(id, Region, Channel, DfsEnable, band) {   // 5G Channel List
	$(id).empty();
	if (Channel == 0)
		$(id).append("<option value='0' selected>" + $.t("lblChannelAuto") + "</option>");
	else
		$(id).append("<option value='0'>" + $.t("lblChannelAuto") + "</option>");

	if (band == 1) {
		var region_cur;
		region_cur = BandWidthList[Region];
		var strs= new Array();
		strs = HighBandWidth5[region_cur].split(" "); 
		for (i = 0;i < strs.length; i++ ) { 
			if (strs[i] == Channel)
				$('#channel5g').append("<option value=" + strs[i] + " selected>"+ strs[i] +"</option>");
			else
				$('#channel5g').append("<option value=" + strs[i]+ ">" + strs[i] +"</option>");
		}
	}  else {
		var region_cur = CountryRegionList[Region].split(",");
		var strs = Region5.split(","); 
		var strs_dfs = new Array();
		if (DfsEnable == "0") {
			strs_dfs = SkipList5[0][region_cur[1]].split(";"); 
		} else {
			strs_dfs = SkipList5[1][region_cur[1]].split(";"); 
		}
		var flag = true;
		
		for (i = 0;i < strs.length; i++ )  {
			flag = true;
	
			for (j = 0; j < strs_dfs.length; j++ )  {
				if (strs_dfs[j] == strs[i]){
					flag = false;
					break;
				}  //去掉DFS的CH
			}
			
			if(flag){
				if (strs[i] == Channel)
					$(id).append("<option value=" + strs[i] + " selected>"+ strs[i] +"</option>");
				else
					$(id).append("<option value=" + strs[i]+ ">" + strs[i] +"</option>");
			}
		}
	}

	return;
}


function showChannelDual5G(Band, Region, defChannel) {  //Dual 5G Channel List
	var DFS = 1;
	if (defChannel==0)
		document.write('<option value="0" data-i18n="lblChannelAuto"  selected></option>');
	else
		document.write('<option value="0" data-i18n="lblChannelAuto" ></option>');
	var strs= new Array();
	var strs_dfs= new Array();
	if (Band == 1) {
		strs=Region51[Region].split(","); 
		strs_dfs=TriSkipList5[0].split(";"); 
	} else if (Band == 2) 	{
		strs=Region52[Region].split(","); 
		strs_dfs=TriSkipList5[1].split(";"); 
	}

	var flag=true;
	
	for (i=0;i<strs.length ;i++ )  {
		flag=true;
		if (DFS == 0) {  //如果DFS关闭
			for (j=0;j<strs_dfs.length ;j++ )  {
				if (strs_dfs[j]==strs[i]){
					flag=false;
					break;
				}  //去掉DFS的CH
			}
		}
		if(flag){
			if (strs[i]==defChannel)
				document.write('<option value="'+strs[i]+'" selected>'+ strs[i] +'</option>');
			else
				document.write('<option value="'+strs[i]+'">'+ strs[i] +'</option>');
		}
	}

	return;
}
