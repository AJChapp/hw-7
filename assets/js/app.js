// Initialize Firebase
var config = {
    apiKey: "AIzaSyBcKD3DFgkuQXWhamwfbF1CyMvlQ7y65y8",
    authDomain: "hello-a6a04.firebaseapp.com",
    databaseURL: "https://hello-a6a04.firebaseio.com",
    projectId: "hello-a6a04",
    storageBucket: "hello-a6a04.appspot.com",
    messagingSenderId: "166189046381"
};
firebase.initializeApp(config);


var database = firebase.database();


// console.log(('heylo').substring(0, 2))
// console.log(('heylo').substring(3, 5))





$("#addTrain").on("click", function (event) {
    event.preventDefault();
    console.log(moment($("#arrivalInput").val().trim()).isValid())
    // if(moment($("#arrivalInput").val().trim()).isValid()==false){
    //     alert('Please Enter Valid Date')
    // }
    // else{

        event.preventDefault();
        
        var trainName = $("#trainInput").val().trim();
        var destination = $("#destinationInput").val().trim();
        var frequency = $("#frequencyInput").val().trim();
        var arrivalTime = $("#arrivalInput").val().trim();
        database.ref().push({
            name: trainName,
            destination: destination,
            frequency: frequency,
            arrival: arrivalTime
            
        });
    // }
});






database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();
    var momentTime=moment(sv.arrival, "Hmm").format("HH:MM")

    $("#lastTrainNameText").text(sv.name)
    $("#lastTrainDestinationText").text(sv.destination)
    $("#lastTrainFrequencyText").text(sv.frequency)
    $("#lastTrainArrivalText").text(sv.arrivalTime)

    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes()
    var hour = dt.getHours();
    var min = dt.getMinutes();


    var newTableItem = $(`
    <tr>
        <td>${sv.name}</td>
        <td>${sv.destination}</td>
        <td>${sv.frequency}</td>
        <td>${sv.arrival}</td>
        <td>PlaceHolder<td>
    </tr>
    `)

    $('#target').append(newTableItem)
})