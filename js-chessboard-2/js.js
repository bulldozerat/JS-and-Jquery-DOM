function food(input) {
document.write("<table border='1' width='200' height='200'>");
    for(let i=1; i<=input; i++) {
        document.write("<tr>");
        for(let j=1; j<=input; j++) {
            if((i+j)%2!=0) {
                document.write("<td bgcolor='white'></td>");
            }
            else {
                document.write("<td bgcolor='black'></td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

food(6);