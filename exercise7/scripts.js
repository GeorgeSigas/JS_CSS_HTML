function NightModeFunc(){
    var x=document.getElementById("NightM");
    if(x.innerHTML==="Night Mode")
    {
        x.innerHTML="Light Mode";
        document.body.style.backgroundColor="#434344";
        document.body.style.color="#eee";
    }
    else{
        x.innerHTML="Night Mode";
        document.body.style.backgroundColor="#eee";
        document.body.style.color="#434344";
    }
        
   

}

function ZoomFunc(){
    var x=document.getElementById("ZoomIn");
    var Fact=document.getElementsByClassName("columnFact")[0];
    var Text=document.getElementsByClassName("columnText")[0];
    if(x.innerHTML==="Zoom In")
    {
        x.innerHTML="Zoom Out";
        Fact.style.fontSize="150%";
        Text.style.fontSize="150%";
    }
    else{
        x.innerHTML="Zoom In";
        Fact.style.fontSize="100%";
        Text.style.fontSize="100%";

    }

}

function HighlightFunc(){
    var selectedText = ''; 
    if (document.getSelection) { 
        selectedText = document.getSelection(); 
    } 

    if(selectedText!='' && selectedText!=' ')
    {
        var str=document.getElementsByClassName("columnText")[0].innerHTML;
        var regex=new RegExp(selectedText,"g");
        var res=str.replace(regex,"<mark>"+selectedText+"</mark>");
        document.getElementsByClassName("columnText")[0].innerHTML=res;
    }
}

function AlertFunc()
{
    alert("Καλωσήρθατε στην σελίδα μου!Εαν θέλετε να κάνετε highlight το κείμενο, απλά μαρκάρετέ το!!😁❤🧡💛💚💙💜🤍");
}

function DateFunc()
{
    var monday=`<h2> HE’S THE FATHER OF MODERN COMPUTER SCIENCE.</h2> Turing essentially pioneered the idea of computer memory.In 1936, Turing published a seminal paper called “On Computable Numbers”, which The Washington Post has called “the founding document of the computer age. In the philosophical article, he hypothesized that one day, we could build machines that could compute any problem that a human could, using 0s and 1s. Turing proposed single-task machines called Turing machines that would be capable of solving just one type of math problem, but a “universal computer” would be able to tackle any kind of problem thrown at it by storing instructional code in the computer’s memory. Turing’s ideas about memory storage and using a singlemachine to carry out all tasks laid the foundation for what would become the digital computer.In 1945, while working for the UK’s National Physical Laboratory,he came up with the Automatic Computing Machine, the first digital computer with stored programs. Previous computers didn’t have electric memory storage, and had to be manually rewired to switch. between different programs.`;
    var tuesday="<h2> HE PLAYED A HUGE ROLE IN WINNING WORLD WAR II.</h2> Turing began working at Bletchley Park, Britain’s secret headquarters for its codebreakers during World War II, in 1939. By one estimate, his work there may have cut the war short by up to two years. He’s credited with saving millions of lives.Turing immediately got to work designing a codebreaking machine called the Bombe (an update of a previous Polish machine) with the help of his colleague Gordon Welchman. The Bombe shortened the steps required in decoding, and 200 of them were built for British use over the course of the war. They allowed codebreakers to decipher up to 4000 messages a day.His greatest achievement was cracking the Enigma, a mechanical device used by the German army to encode secure messages. It proved nearly impossible to decrypt without the correct cipher, which the German forces changed every day. Turing worked to decipher German naval communications at a point when German U-boats were sinking ships carrying vital supplies across the Atlantic between Allied nations. In 1941, Turing and his team managed to decode the German Enigma messages, helping to steer Allied ships away from the German submarine attacks. In 1942, he traveled to the U.S. to help the Americans with their own codebreaking work.";
    var wednesday="<h2>HE HAD SOME ODD HABITS.</h2>Like many geniuses, Turing was not without his eccentricities. He wore a gas mask while riding his bike to combat his allergies. Instead of fixing his bike’s faulty chain, he learned exactly when to dismount to secure it in place before it slipped off. He was known around Bletchley Park for chaining his tea mug to a radiator to prevent it from being taken by other staffers.";
    var thursday="<h2>HE RODE HIS BIKE 60 MILES TO GET TO THE FIRST DAY OF SCHOOL.</h2>Though he was considered an average student, Turing was dedicated enough to his schooling that when a general strike prevented him from taking the train to his first day at his new elite boarding school, the 14-year-old rode his bike the 62 miles instead.";
    var friday=`<h2> HE TRIED OUT FOR THE OLYMPICS.</h2>Turing started running as a schoolboy and continued throughout his life, regularly running the 31 miles between Cambridge and Ely while he was a fellow at King’s College. During World War II, he occasionally ran the 40 miles between London and Bletchley Park for meetings.He almost became an Olympic athlete, too. He came in fifth place at a qualifying marathon for the 1948 Olympics with a 2-hour, 46-minute finish (11 minutes slower than the 1948 Olympic marathon winner).However, a leg injury held back his athletic ambitions that year. Afterward, he continued running for the Walton Athletic Club, though, and served as its vice president. ”I have such a stressful job that the only way I can get it out of my mind is by running hard,” he once told the club’s secretary. "It's the only way I can get some release."`;
    var saturday="<h2>HE WAS PROSECUTED FOR BEING GAY.</h2>In 1952, Turing was arrested after reporting a burglary in his home. In the course of the investigation, the police discovered Turing’s relationship with another man, Arnold Murray. Homosexual relationships were illegal in the UK at the time, and he was charged with “gross indecency.” He pled guilty on the advice of his lawyer, and opted to undergo chemical castration instead of serving time in jail.";
    var sunday="<h2>HE POISONED HIMSELF … MAYBE.</h2>There is still a bit of mystery surrounding Turing’s death at the age of 41. Turing died of cyanide poisoning, in what is widely believed to have been a suicide. Turing’s life had been turned upside down by his arrest. He lost his job and his security clearance. By order of the court, he had to take hormones intended to “cure” his homosexuality, which caused him to grow breasts and made him impotent. But not everyone is convinced that he died by suicide. In 2012, Jack Copeland, a Turing scholar, argued that the evidence used to declare Turing’s death a suicide in 1954 would not be sufficient to close the case today. The half-eaten apple by his bedside, thought to be the source of his poisoning, was never tested for cyanide. There was still a to-do list on his desk, and his friends told the coroner at the time that he had seemed in good spirits.Turing’s mother, in fact, maintained that he probably accidentally poisoned himself while experimenting with the chemical in his home laboratory. (He was known to taste chemicals while identifying them, and could be careless with safety precautions.).That line of inquiry is far more tame than some others, including one author’s theory that he was murdered by the FBI to cover up information that would have been damaging to the U.S.";
    var d=new Date();
    var n=d.getDay();
    if(n==0){  
        document.getElementById("Dailyheader").innerHTML="SUNDAY'S FACT";
        document.getElementById("DailyFact").innerHTML=sunday;
    }
    else if(n==1){
        document.getElementById("Dailyheader").innerHTML="MONDAY'S FACT";
        document.getElementById("DailyFact").innerHTML=monday;
    }
    else if(n==2){
        document.getElementById("Dailyheader").innerHTML="TUESDAY'S FACT";
        document.getElementById("DailyFact").innerHTML=tuesday;
    }
    else if(n==3){
        document.getElementById("Dailyheader").innerHTML="WEDNESDAY'S FACT";
        document.getElementById("DailyFact").innerHTML=wednesday;
    }
    else if(n==4){
        document.getElementById("Dailyheader").innerHTML="THURSDAY'S FACT";
        document.getElementById("DailyFact").innerHTML=thursday;
    }
    else if(n==5){
        document.getElementById("Dailyheader").innerHTML="FRIDAY'S FACT";
        document.getElementById("DailyFact").innerHTML=friday;
    }
    else if(n==6){
        document.getElementById("Dailyheader").innerHTML="SATURDAY'S FACT";
        document.getElementById("DailyFact").innerHTML=saturday;
    }
}