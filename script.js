<script>
  const sensorRef = database.ref("sensors/classroom1");

  sensorRef.on("value", (snapshot) => {
    const data = snapshot.val();

    if (data) {
      document.getElementById("temp").innerText = data.temperature + " °C";
      document.getElementById("hum").innerText  = data.humidity + " %";
      document.getElementById("co2").innerText  = data.co2 + " ppm";
    }
  });
</script>
