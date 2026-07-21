package org.example.chat.repository;

import org.example.chat.entity.ChatMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

public interface ChatMemberRepository extends JpaRepository<ChatMember, Long> {

    List<ChatMember> findByChatRoom_Id(Long RoomId);
    boolean existsByMember_IdAndChatRoom_Id(Long memberId, Long roomId);

}
