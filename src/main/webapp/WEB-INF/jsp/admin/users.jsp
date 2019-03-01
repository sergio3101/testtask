<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Users</title>
</head>
<body>
<ul>
<c:forEach items="${userList}" var="user">
    <li>${user.username} - ${user.email} - ${user.birthday}</li>
</c:forEach>
</ul>
</body>
</html>
