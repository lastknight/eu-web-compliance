## Area F: Technical Security (Art. 32)

### F-01 HTTPS everywhere with HTTP redirect
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Serve every page over HTTPS, redirect all HTTP requests to HTTPS, and eliminate mixed content.
- **Acceptance**: Crawl the scheme of every page; confirm HTTP access follows the full redirect chain to a final HTTPS destination; confirm no mixed-content warnings appear in the browser console.
- **Legal**: GDPR Art. 32, Art. 5(1)(f).

### F-02 Modern TLS configuration
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Enforce TLS 1.2 as the minimum version, use modern cipher suites, and serve a valid certificate that is not near expiry.
- **Acceptance**: Run testssl.sh or the SSL Labs API to enumerate supported protocols and ciphers, analyze the certificate (validity, expiry, chain), and check for known cryptographic vulnerabilities graded by severity.
- **Legal**: GDPR Art. 32.

### F-03 HSTS enabled
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Send the Strict-Transport-Security header, ideally with preload, to force encrypted connections and prevent downgrade and HTTPS-stripping attacks.
- **Acceptance**: Header check for the presence and parameters of Strict-Transport-Security (max-age, includeSubDomains, preload).
- **Legal**: GDPR Art. 32.

### F-04 Security headers
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Set CSP, X-Content-Type-Options, and X-Frame-Options/frame-ancestors to defend against XSS and clickjacking, and avoid informative server banners.
- **Acceptance**: Header check with MDN HTTP Observatory-style scoring; detect the HTTP security headers, the server/application banner, and any reverse proxy.
- **Legal**: GDPR Art. 32.

### F-05 Referrer-Policy configured
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Configure a Referrer-Policy that prevents leaking URLs containing sensitive parameters (tokens, emails, IDs in query strings) to third parties.
- **Acceptance**: Header check on the Referrer-Policy value plus analysis of the Referer header on outgoing requests in the HAR toward third-party domains.
- **Legal**: GDPR Art. 32, Art. 5(1)(f).

### F-06 Secure session cookies
- **Level**: SHOULD
- **Applies-if**: session cookies are present [COND]
- **Requirement**: Set the Secure, HttpOnly, and SameSite attributes on every session cookie.
- **Acceptance**: Analyze each session cookie's attributes for presence of Secure, presence of HttpOnly, and the SameSite value ('unspecified' if absent).
- **Legal**: GDPR Art. 32.

### F-07 Forms POST over HTTPS with no personal data in GET
- **Level**: MUST
- **Applies-if**: always
- **Requirement**: Ensure login, contact, and checkout forms POST only to HTTPS endpoints and never transmit personal data in GET/query strings.
- **Acceptance**: Analyze each form's action attribute across all frames (flag if it starts with 'http:'); inspect the method (GET vs POST) and verify via HAR that no personal data travels in a query string.
- **Legal**: GDPR Art. 32, Art. 5(1)(f).

### F-08 No sensitive files exposed
- **Level**: MUST
- **Applies-if**: always (intrusive probing requires written client authorization)
- **Requirement**: Ensure no sensitive files or listings are reachable, including .git, .env, backups, dumps, and directory listings.
- **Acceptance**: HTTP probe a short, non-intrusive list of known paths (.git/config, .env, /backup, *.sql, directory index) and verify the returned status and content-type.
- **Legal**: GDPR Art. 32.

### F-09 Error pages reveal no internals
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Ensure 404 and error pages do not reveal stack traces, absolute paths, or software names and versions.
- **Acceptance**: Probe a non-existent page and analyze the response body for stack traces, absolute paths, and software names and versions.
- **Legal**: GDPR Art. 32.

### F-10 Email authentication (SPF, DKIM, DMARC)
- **Level**: SHOULD
- **Applies-if**: always
- **Requirement**: Configure SPF, DKIM, and DMARC records for the domain to prevent email spoofing and phishing against data subjects.
- **Acceptance**: DNS TXT queries for SPF, DKIM (known selectors), and DMARC records, verifying syntax and policy (p=none/quarantine/reject).
- **Legal**: GDPR Art. 32.

### F-11 Login form hardening
- **Level**: SHOULD
- **Applies-if**: a login area is present [COND] (test only with written client authorization)
- **Requirement**: Prevent user enumeration through error messages and response timing, and apply perceptible rate limiting to defend against credential stuffing and brute force.
- **Acceptance**: Light, non-intrusive test (2-3 requests) comparing messages and response times between an existing and a non-existing user; observe whether a block occurs after repeated failed attempts.
- **Legal**: GDPR Art. 32.

### F-12 Encryption of personal data at rest and backups
- **Level**: SHOULD
- **Applies-if**: always (back-end; verified by documentation, not by web scan)
- **Requirement**: Encrypt personal data at rest (AES-256) across database, file store, and backups with equal robustness.
- **Acceptance**: Not externally observable; documentary intake review of database, file store, and backup encryption, algorithm, and key management, flagged as a point to confirm with the client.
- **Legal**: GDPR Art. 32(1)(a), Art. 32(1)(b); cf. Art. 34(3)(a).

### F-13 Password hashing with bcrypt/scrypt/Argon2
- **Level**: MUST
- **Applies-if**: always (back-end; verified by documentation/code, not by web scan)
- **Requirement**: Hash account passwords with bcrypt, scrypt, or Argon2, never storing them in clear text and never using fast unsalted hashes (MD5, unsalted SHA-1).
- **Acceptance**: Not externally observable; documentary/code intake review of the credential hashing algorithm. Indirect indicator: a password-recovery flow that emails the old password in clear text reveals unhashed storage.
- **Legal**: GDPR Art. 32, Art. 5(1)(f).

### F-14 Least-privilege access control and access logging
- **Level**: MUST
- **Applies-if**: always (back-end; verified by documentation, not by web scan)
- **Requirement**: Restrict access to personal data on a need-to-know basis and log all access, especially administrative access, to support incident reconstruction and accountability.
- **Acceptance**: Not externally observable; documentary intake review of the role/permission model (least privilege), presence and retention of access logs to data and admin functions, and MFA on privileged accounts.
- **Legal**: GDPR Art. 32, Art. 32(1)(b), Art. 5(2).

### F-15 Patching process with defined SLA
- **Level**: SHOULD
- **Applies-if**: always (back-end/process; verified by documentation, not by web scan)
- **Requirement**: Operate a formalized patching process with a defined SLA that closes critical security patches within 48 hours.
- **Acceptance**: Not reliably observable externally; documentary intake review of a patching process with an SLA (critical-patch window, owner, tracking). Indirect indicator: software versions detected in F-04/F-09 are known to be vulnerable.
- **Legal**: GDPR Art. 32, Art. 32(1)(d).

### F-16 Pseudonymization/anonymization where feasible
- **Level**: SHOULD
- **Applies-if**: always (back-end/process; verified by documentation, not by web scan)
- **Requirement**: Apply pseudonymization or anonymization of personal data by default in processing design wherever technically possible.
- **Acceptance**: Not externally observable; documentary intake review of where data is pseudonymized or anonymized (analytics, logs, test/dev environments, reporting datasets) and how separation of the additional re-identification information is managed.
- **Legal**: GDPR Art. 32(1)(a), Art. 25.
