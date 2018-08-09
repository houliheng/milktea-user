package com.milktea.milkteauser.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.milktea.milkteauser.domain.TeaUserInfo;
import com.milktea.milkteauser.exception.MilkTeaException;
import com.milktea.milkteauser.service.UserInfoService;
import com.milktea.milkteauser.service.UserRegisterService;
import com.milktea.milkteauser.vo.ResponseBody;
import com.milktea.milkteauser.vo.ResponseHeader;



/**
 * @author caoxx
 *
 */
/**
 * @author john
 *
 */
@RestController
@RequestMapping("/userRegister")
public class UserRegisterController {

	@Autowired
	UserInfoService userInfoService;
	UserRegisterService userRegisterService;
	
	
	/**
	 * @param teaUserInfo
	 * @return 
	 * @throws MilkTeaException
	 * 新用户插入
	 */
	@RequestMapping(value="/insert", method = RequestMethod.POST)
	public ResponseHeader  insert(TeaUserInfo teaUserInfo) throws MilkTeaException{
		ResponseHeader header = new ResponseHeader();
		this.userInfoService.insert(teaUserInfo);
		return header;
	}
	
	
	/**
	 * 微信OPENID查找，返回客户信息，如果为NULL返回TeaUserInfo
	 * @param teaUserInfo
	 * @return TeaUserInfo
	 * @throws MilkTeaException
	 */
	@RequestMapping(value="/findUserByWeixinOpenid", method = RequestMethod.POST)
	public ResponseBody<TeaUserInfo> findUserByWeixinOpenid(TeaUserInfo teaUserInfo) throws MilkTeaException{
		ResponseBody<TeaUserInfo> responseBody = new ResponseBody<>();
		responseBody.setData(this.userRegisterService.findRegisterOpenid(teaUserInfo));
		return responseBody;
	}
	
	/**
	 * 根据手机号查找客户信息，如果为NULL返回TeaUserInfo
	 * @param teaUserInfo
	 * @return TeaUserInfo
	 * @throws MilkTeaException
	 */
	@RequestMapping(value="/findUserByWeixinOpenid", method = RequestMethod.POST)
	public ResponseBody<TeaUserInfo> findUserByTelephone(TeaUserInfo teaUserInfo) throws MilkTeaException{
		ResponseBody<TeaUserInfo> responseBody = new ResponseBody<>();
		responseBody.setData(this.userRegisterService.findRegisterTelephone(teaUserInfo));
		return responseBody;
	}
	
	
	
	/**
	 * @param teaUserInfo
	 * @return ResponseHeader
	 * @throws MilkTeaException
	 * 当手机比微信先注册时 绑定微信号和手机号
	 */
	@RequestMapping(value="/bindOpenidTel", method = RequestMethod.POST)
	public ResponseHeader bindOpenidTel(TeaUserInfo teaUserInfo) throws MilkTeaException{
		ResponseHeader header = new ResponseHeader();
		this.userRegisterService.bindOpenidTel(teaUserInfo);
		return header;
	}
	
	
	@RequestMapping(value="/getPollCode", method = RequestMethod.POST)
	public String getPollCode(TeaUserInfo teaUserInfo) throws MilkTeaException{
		String responseStr = "";
		responseStr = this.userRegisterService.getPollCode(teaUserInfo);
		return responseStr;
	}
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}