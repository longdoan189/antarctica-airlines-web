const current_directory = window.location.href;
current_page = current_directory.split("/").slice(-1)[0];
if (current_page == "index.html") {
    document.getElementById("index_a").style.color = "black";
} 
else if (current_page == "product.html") {
    document.getElementById("product_a").style.color = "black";
}
else if (current_page == "about.html") {
    document.getElementById("about_a").style.color = "black";
}
else if (current_page == "schedule.html") {
    document.getElementById("schedule_a").style.color = "black";
}
else if (current_page == "acknowledge.html") {
    document.getElementById("acknowledge_a").style.color = "black";
} 
else if (current_page == "booking.html") {
    document.getElementById("booking_a").style.color = "black";
}                      