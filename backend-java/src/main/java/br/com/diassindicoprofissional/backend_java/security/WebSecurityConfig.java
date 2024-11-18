package br.com.diassindicoprofissional.backend_java.security;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .requestMatchers(HttpMethod.POST, "/usuarios").permitAll()
                .requestMatchers(HttpMethod.POST, "/apartamentos").permitAll()
                .requestMatchers(HttpMethod.POST, "/login").permitAll()
                .requestMatchers(HttpMethod.POST, "/enviar").permitAll()
                .requestMatchers(HttpMethod.POST, "/reservas").permitAll()
                .requestMatchers(HttpMethod.POST, "/despesas").permitAll()
                .requestMatchers(HttpMethod.POST, "/condominio").permitAll()

                .requestMatchers(HttpMethod.GET, "/usuarios").permitAll()
                .requestMatchers(HttpMethod.GET, "/login").permitAll()
                .requestMatchers(HttpMethod.GET, "/enviar").permitAll()
                .requestMatchers(HttpMethod.GET, "/reservas").permitAll()
                .requestMatchers(HttpMethod.GET, "/despesas").permitAll()
                .requestMatchers(HttpMethod.GET, "/condominio").permitAll()
                .requestMatchers(HttpMethod.GET, "/apartamentos").permitAll()

                .requestMatchers(HttpMethod.GET, "/usuarios/{id}").permitAll()
                .requestMatchers(HttpMethod.GET, "/login/{id}").permitAll()
                .requestMatchers(HttpMethod.GET, "/enviar/{id}").permitAll()
                .requestMatchers(HttpMethod.GET, "/reservas/{id}").permitAll()
                .requestMatchers(HttpMethod.GET, "/despesas/{id}").permitAll()
                .requestMatchers(HttpMethod.GET, "/apartamentos/{id}").permitAll()
                .requestMatchers(HttpMethod.GET, "/condominio/{id}").permitAll()
                .requestMatchers(HttpMethod.GET, "/busca/condominio").permitAll()
                .requestMatchers(HttpMethod.GET, "/condominio/{condominioId}").permitAll()

                .requestMatchers(HttpMethod.PUT, "/condominio/{condominioId}").permitAll()
                .requestMatchers(HttpMethod.DELETE, "/condominio/{condominioId}").permitAll()
                .requestMatchers(HttpMethod.PUT, "/apartamentos/{id}").permitAll()
                .requestMatchers(HttpMethod.DELETE, "/apartamentos/{id}").permitAll()

                .anyRequest().authenticated().and().cors();

        http.addFilterBefore(new MyFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

}
