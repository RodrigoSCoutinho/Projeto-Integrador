package br.com.diassindicoprofissional.backend_java.security;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import br.com.diassindicoprofissional.backend_java.entities.Usuario;

import java.io.IOException;
import java.security.Key;
import java.util.Collections;
import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;

public class TokenUtil {

    public static final long SECONDS = 1000;
    public static final long MINUTES = 60 * SECONDS;
    public static final long HOURS = 60 * MINUTES;
    public static final long DAYS = 24 * HOURS;
    public static final long EXPIRATION_TIME = 5 * MINUTES;

    public static final String ISSUER = "IsiFLIX";

    // uma string de 32 caracteres
    public static final String SECRET_KEY = "0b4f6a4e8c2d0a1b0f4e8c2d0a1b0f4e";

    public static final String PREFIX = "Bearer";

    public static SalutarToken encode(Usuario usuario) {
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
        String jws = Jwts.builder().setSubject(usuario.getLogin())
                .setIssuer(ISSUER)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
        return new SalutarToken(PREFIX + " " + jws);
    }

    public static Authentication decode(HttpServletRequest request) throws ServletException, IOException {
        String token = request.getHeader("Authorization");
        token = token.replace(PREFIX, ""); // * Simplesmente retiro a palavar BEARER */
        Jws<Claims> claims;
        // claims = Jwts.parserBuilder().setSigningKey(SECRET_KEY.getBytes()).build()
        // .parseClaimsJws(token);
        claims = Jwts.parser().setSigningKey(SECRET_KEY.getBytes()).build() // *Decodificando */
                .parseClaimsJws(token);

        String subject = claims.getBody().getSubject();
        String issuer = claims.getBody().getIssuer();
        Date exp = claims.getBody().getExpiration();
        if (isValid(subject, issuer, exp)) {
            return new UsernamePasswordAuthenticationToken(subject, null, Collections.emptyList());
        }
        return null;
    }

    public static boolean isValid(String subject, String issuer, Date exp) {
        return subject != null && subject.length() > 0 && issuer.equals(ISSUER)
                && exp.after(new Date(System.currentTimeMillis()));
    }
}