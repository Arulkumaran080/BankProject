package com.bank.controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.transaction.Status;

@RestController
@CrossOrigin
public class MailController {
	
	
	@Autowired
	private JavaMailSender mailSender;

	@GetMapping("/sendMail/{email}")
	public int sendEmail(@PathVariable String email) {
		SimpleMailMessage message=new SimpleMailMessage();
		Random random = new Random();
        int OTP = random.nextInt(900000) + 100000;
		
		message.setFrom("your.bank001@gmail.com");
		message.setTo(email);
		message.setText("Hi,\n\n"
				+ "The One Time Password (OTP) to verify your Email Address given in Loan Application Form \n"
				+ "for Personal Loan is \n\n"
				+ "Code : "+OTP+"\n\n"
				+ "Please do not share this code with anyone.\n\n"
				+ "Thank You,\n"
				+ "Your Bank Teams");
		message.setSubject("Mail Verification");
		
		mailSender.send(message);
		System.out.println("mail sended successfully");
		return OTP;
	}
	
	
	@GetMapping("/PasswordReset/{email}")
	public int PasswordResetEmail(@PathVariable String email) {
		SimpleMailMessage message=new SimpleMailMessage();
		Random random = new Random();
        int OTP = random.nextInt(900000) + 100000;
		
		message.setFrom("your.bank001@gmail.com");
		message.setTo(email);
		message.setText("Hi,\n\n"
				+ "The One Time Password (OTP) to Reset Your Password \n"
				+ "for Your Bank is \n\n"
				+ "Code : "+OTP+"\n\n"
				+ "Please do not share this code with anyone.\n\n"
				+ "Thank You,\n"
				+ "Your Bank Teams");
		message.setSubject("Password Reset");
		
		mailSender.send(message);
		System.out.println("mail sended successfully");
		return OTP;
	}
}
