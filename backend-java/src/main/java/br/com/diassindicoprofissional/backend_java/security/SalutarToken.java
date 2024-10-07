package br.com.diassindicoprofissional.backend_java.security;

public class SalutarToken {
    private String token;

    public SalutarToken(String token) {
        super();
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
