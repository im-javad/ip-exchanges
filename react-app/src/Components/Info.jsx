import React from "react";

function Info(props) {
  return (
    <React.Fragment>
      <h1>WE KNOW</h1>
      <div className="main" id="main">
        <p>
          {">"} <span>ID</span>: <i>"{props.info.timezone.id}"</i>
        </p>
        <p>
          {">"} <span>COUNTRY</span>: <i>"{props.info.country}"</i>
        </p>
        <p>
          {">"} <span>CITY</span>: <i>"{props.info.city}"</i>
        </p>
        <p>
          {">"} <span>CURRENT TIME</span>:{" "}
          <i>"{props.info.timezone.current_time}"</i>
        </p>
        <p>
          {">"} <span>ISP</span>: <i>"{props.info.connection.isp}"</i>
        </p>
        <p>
          {">"} <span>ASN</span>: <i>"{props.info.connection.asn}"</i>
        </p>
        <p>
          {">"} <span>CONNECTION CODE</span>:{" "}
          <i>"{props.info.connection_code}"</i>
        </p>
        <p>
          {">"} <span>IP</span>: <i>"{props.info.ip}"</i>
        </p>
        <p>
          {">"} <span>LATITUDE</span>: <i>"{props.info.latitude}"</i>
        </p>
        <p>
          {">"} <span>LONGITUDE</span>: <i>"{props.info.longitude}"</i>
        </p>
        <p>
          {">"} <span>TYPE</span>: <i>"{props.info.type}"</i>
        </p>
        <p>
          {">"} <span>POSTAL</span>: <i>"{props.info.postal}"</i>
        </p>
        <p>
          {">"} <span>ABBR</span>: <i>"{props.info.timezone.abbr}"</i>
        </p>
        <p>
          {">"} <span>OFFCET</span>:<i>"{props.info.timezone.offset}"</i>
        </p>
        <p>
          {">"} <span>UTC</span>: <i>"{props.info.timezone.utc}"</i>
        </p>
        <p>
          {">"} <span>ID DST</span>: <i>"{props.info.timezone.is_dst}"</i>
        </p>

        <p>
          {">"} <span>FOLLOW</span>:{" "}
          <i>
            [
            <a href="https://github.com/im-javad" target={"_blank"}>
              Developer{" "}
            </a>
            ,
            <a
              href="https://github.com/im-javad/get-info-by-IP"
              target={"_blank"}
            >
              {" "}
              GitHub
            </a>
            ]
          </i>
        </p>

        <p>
          {"<"}
          <strong>GOOD-LUCK-BRO</strong>
          {"/>"}
        </p>
      </div>
      <script type="text/javascript" src="./aa.js"></script>
    </React.Fragment>
  );
}

export default Info;
