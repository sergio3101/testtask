<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Static Users</title>
    <%@ include file="includes/headMeta.jsp" %>
    <%@ include file="includes/cssBlock.jsp" %>
</head>
<body>
<div id='root'></div>
<%@ include file="includes/footerScripts.jsp" %>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="/static/js/App.jsx"></script>
</body>
</html>