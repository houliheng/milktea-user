package com.milktea.milkteauser.exception;

/**
 * 错误信息
 * @author caoxx
 *
 */
public enum MilkTeaErrorConstant {
    
    SUCCESS("00000", "成功" , "success"),
    
    DATABASE_ACCESS_FAILURE("00001", "数据库访问失败" , "Database access failure"),
    WEIXIN_ACCESSTOKEN_FAILURE("00002", "微信access_token取得错误" , "Get access_token failure"),
    WEIXIN_GETUSERINFO_FAILURE("00003", "微信用户详细信息取得错误" , "Get userinfo failure"),
    
   
    
    
    
    UNKNOW_EXCEPTION("10000", "程序内部异常" , "Something wrong with program");
    
    final String errorCode;
    
    final String cnErrorMsg;
    
    final String usErrorMsg;
    
    private MilkTeaErrorConstant(String errorCode , String cnErrorMsg, String usErrorMsg){
        this.errorCode = errorCode;
        this.cnErrorMsg = cnErrorMsg;
        this.usErrorMsg = usErrorMsg;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public String getCnErrorMsg() {
        return cnErrorMsg;
    }

    public String getUsErrorMsg() {
        return usErrorMsg;
    }

}
