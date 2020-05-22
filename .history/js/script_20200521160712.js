* {
    box - sizing: border - box;
}

/* Create three equal columns that floats next to each other */
.column1 {
    float: left;
    width: 15 % ;
    padding: 10 px;
    height: 500 px;

}

.column2 {
    float: left;
    width: 70 % ;
    padding: 10 px;
    height: 500 px;
}

.column3 {
    float: left;
    width: 15 % ;
    padding: 10 px;
    height: 500 px;
}

/* Clear floats after the columns */
.row: after {
    content: "";
    display: table;
    clear: both;
}

tr {
    text - align: center;
}

#
tweetArea {
    width: 300 px;
    height: 100 px
}

#
tweetBtn {
    margin - top: 10 px;
    width: 300 px;

}