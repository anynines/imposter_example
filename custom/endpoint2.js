if (context.request.params.action == 'create') {
    respond()
        .withStatusCode(201)
        .and()
        .immediately()
} else {
    respond()
        .withStatusCode(400)
        .and()
        .immediately()
}