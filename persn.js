//har kopierat koden från http://www.webforum.nu/showthread.php?t=42712

function personnummer(nr){
	this.valid=false;
	if(!nr.match(/^(\d{2})(\d{2})(\d{2})\-(\d{4})$/)){ return false; }
	this.now=new Date(); this.nowFullYear=this.now.getFullYear()+""; this.nowCentury=this.nowFullYear.substring(0,2); this.nowShortYear=this.nowFullYear.substring(2,4);
	this.year=RegExp.$1; this.month=RegExp.$2; this.day=RegExp.$3; this.controldigits=RegExp.$4;
	this.fullYear=(this.year*1<=this.nowShortYear*1)?(this.nowCentury+this.year)*1:((this.nowCentury*1-1)+this.year)*1;
	var months = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	if(this.fullYear%400==0||this.fullYear%4==0&&this.fullYear%100!=0){ months[1]=29; }
	if(this.month*1<1||this.month*1>12||this.day*1<1||this.day*1>months[this.month*1-1]){ return false; }
	this.alldigits=this.year+this.month+this.day+this.controldigits;
	var nn="";
	for(var n=0;n<this.alldigits.length;n++){ nn+=((((n+1)%2)+1)*this.alldigits.substring(n,n+1)); }
	this.checksum=0;
	for(var n=0;n<nn.length;n++){ this.checksum+=nn.substring(n,n+1)*1; }
	this.valid=(this.checksum%10==0)?true:false;
	this.sex=parseInt(this.controldigits.substring(2,3))%2;
}