<?php

$userGuid = "11df7430-6368-4d7f-9705-f0b4601ed5e1";
$apiKey = "G8Qas9wJaTAndgewT6Jv+sqRPhrY6J0gH6dBx+nxwtdvrXprOfYtC/dfM+jvyo3tsp7Dpz8i5jTJ7Cu7k83ZUw==";

function query($connectorGuid, $input, $userGuid, $apiKey, $additionalInput) {

  $url = "https://api.import.io/store/connector/" . $connectorGuid . "/_query?_user=" . urlencode($userGuid) . "&_apikey=" . urlencode($apiKey);

  $data = array("input" => $input);
  if ($additionalInput) {
    $data["additionalInput"] = $additionalInput;
  }

  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_setopt($ch, CURLOPT_POSTFIELDS,  json_encode($data));
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  $result = curl_exec($ch);
  curl_close($ch);

  return json_decode($result);
}

// Query for tile astrology
$result = query("485409c7-e760-4a2c-82f1-e88557bb39f2", array(
  "webpage/url" => "http://www.astrology.com/love-compatibility-sagittarius-aquarius/2-d-lvmt-sagittarius_aquarius",
), $userGuid, $apiKey, false);
var_dump($result);
