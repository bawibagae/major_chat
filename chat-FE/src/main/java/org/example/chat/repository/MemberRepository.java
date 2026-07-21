package org.example.chat.repository;

import org.example.chat.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findByLoginIdAndPassword(
            String loginId,
            Long password
    );
}
