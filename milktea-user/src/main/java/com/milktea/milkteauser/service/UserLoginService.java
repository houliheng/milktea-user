package com.milktea.milkteauser.service;

import com.milktea.milkteauser.domain.TeaLoginWeixin;
import com.milktea.milkteauser.domain.TeaSaveContactVo;
import com.milktea.milkteauser.exception.MilkTeaException;




public interface UserLoginService {
	
	/**
     * 添加用户信息
     * @param figureVo
     * @throws MilkTeaException
     */
   public Integer insert(TeaLoginWeixin teaLoginWeixin) throws MilkTeaException;
   
   
   
   /**
    * 根据ID查用户信息
    * @param figureVo
    * @throws MilkTeaException
    */
   public TeaLoginWeixin selectByopenId(String openId) throws MilkTeaException;
   
   /**
    * 修改用户信息
    * @param figureVo
    * @throws MilkTeaException
    */
   public Integer  update(TeaLoginWeixin teaLoginWeixin) throws MilkTeaException;
   
   
   /**
    * 第一次登入用CODE查询
 * @param code
 * @return
 * @throws MilkTeaException
 */
   public TeaLoginWeixin getTokenOpenId(String code) throws MilkTeaException;
   
   
   
   /**
    * 后续用TOKEN做CHECK
 * @param code
 * @param accessToken
 * @param openId
 * @return
 * @throws MilkTeaException
 */
public TeaLoginWeixin getWeixinCheck(String code,String accessToken,String openId) throws MilkTeaException;

/**
 * 用微信全局ACCESS_TOKEN取得用户信息
* @param code
* @param accessToken
* @param openId
* @return
* @throws MilkTeaException
*/
public TeaLoginWeixin getGlobalToken(String code,String accessToken,String openId) throws MilkTeaException;



/**
 * 保存网页联系人信息
 * @param teaSaveContactVo
 * @throws MilkTeaException
 */
public void saveContact(TeaSaveContactVo teaSaveContactVo) throws MilkTeaException;
   
   
}
