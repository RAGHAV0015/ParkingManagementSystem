package com.parking.security.JwtUtil.java;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.util.Date;

public class JwtUtil {

    private static final String HS256_SECRET_BASE64 =
        "jKE4Y6KAcK8EHeFHKR+e5Out3gMCWl4o6anIoUdMoXV+Hqk2ENbr2JAIT0+b7blml5qe8f9a19UKnQJ1qnjRKw==";

    public static String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 day
                .signWith(
                    Keys.hmacShaKeyFor(Decoders.BASE64.decode(HS256_SECRET_BASE64)),
                    SignatureAlgorithm.HS256
                )
                .compact();
    }
}