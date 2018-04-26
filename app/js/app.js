/**
 * Created by JIAQIANG on 2015/11/5.
 */
'use strict';
//noinspection JSUnresolvedFunction
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ngTouch', 'myControllers', 'myServices', 'myDirectives']);

myApp.constant('ST', {
    v: '?v=' + (new Date().getTime())
});

myApp.config(function ($httpProvider, $routeProvider, ST) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.interceptors.push('myInterceptor');
    $routeProvider.when('/index', { //首页
        templateUrl: 'partials/index.html' + ST.v,
        controller: 'IndexCtrl',
        access: true
    }).when('/index/:agent_code', { //首页+代理包
        templateUrl: 'partials/index.html' + ST.v,
        controller: 'IndexCtrl',
        access: true
    }).when('/login', { //登陆
        templateUrl: 'partials/login.html' + ST.v,
        controller: 'LoginCtrl',
        access: true
    }).when('/register1', { //注册第一步
        templateUrl: 'partials/register1.html' + ST.v,
        controller: 'Register1Ctrl',
        access: true
    }).when('/register2/:mobile', { //注册第二步
        templateUrl: 'partials/register2.html' + ST.v,
        controller: 'Register2Ctrl',
        access: true
    }).when('/agreementRegister', { //注册协议
        templateUrl: 'partials/agreementRegister.html' + ST.v,
        controller: 'AgreementRegister',
        access: true
    }).when('/myHome', { //我的
        templateUrl: 'partials/myHome.html' + ST.v,
        controller: 'MyHomeCtrl',
        access: false
    }).when('/myInfo', { //我的信息
        templateUrl: 'partials/myInfo.html' + ST.v,
        controller: 'MyInfoCtrl',
        access: false
    }).when('/forgetUserPass', { //忘记用户密码
        templateUrl: 'partials/forgetUserPass.html' + ST.v,
        controller: 'ForgetUserPassCtrl',
        access: true
    }).when('/forgetTradePass', { //忘记交易密码
        templateUrl: 'partials/forgetTradePass.html' + ST.v,
        controller: 'ResetTradePassCtrl',
        access: false
    }).when('/userPassModify', { //更改用户密码
        templateUrl: 'partials/userPassModify.html' + ST.v,
        controller: 'UserPassModifyCtrl',
        access: false
    }).when('/identification', { //实名认证
        templateUrl: 'partials/identification.html' + ST.v,
        controller: 'IdentificationCtrl',
        access: false
    }).when('/tradePassSet', { //设置交易密码
        templateUrl: 'partials/tradePassSet.html' + ST.v,
        controller: 'TradePassSetCtrl',
        access: false
    }).when('/tradePassModify', { //更改交易密码
        templateUrl: 'partials/tradePassModify.html' + ST.v,
        controller: 'TradePassModifyCtrl',
        access: false
    }).when('/payType', { //支付方式
        templateUrl: 'partials/payType.html' + ST.v,
        controller: 'PayTypeCtrl',
        access: false
    }).when('/payBank', { //账户充值
        templateUrl: 'partials/payBank.html' + ST.v,
        controller: 'PayBankCtrl',
        access: true
    }).when('/payMobile', { //快捷支付 - 已停用
        templateUrl: 'partials/payMobile.html' + ST.v,
        controller: 'PayMobileCtrl',
        access: false
    }).when('/paySuccess', { //支付成功跳转
        templateUrl: 'partials/paySuccess.html' + ST.v,
        controller: 'PaySuccessCtrl',
        access: false
    }).when('/bankInfo', { //银行信息
        templateUrl: 'partials/bankInfo.html' + ST.v,
        controller: 'BankInfoCtrl',
        access: false
    }).when('/bankCardList', { //银行卡列表
        templateUrl: 'partials/bankCardList.html' + ST.v,
        controller: 'BankCardListCtrl',
        access: false
    }).when('/addBankCard', { //添加银行卡
        templateUrl: 'partials/addBankCard.html' + ST.v,
        controller: 'AddBankCardCtrl',
        access: false
    }).when('/modifyBankCard/:bankCardId', { //更改银行卡
        templateUrl: 'partials/modifyBankCard.html' + ST.v,
        controller: 'ModifyBankCardCtrl',
        access: false
    }).when('/withdraw', { //体现
        templateUrl: 'partials/withdraw.html' + ST.v,
        controller: 'WithdrawCtrl',
        access: false
    }).when('/fund', { //资金明细
        templateUrl: 'partials/fund.html' + ST.v,
        controller: 'FundCtrl',
        access: false
    }).when('/notice', { //公告 - 已经整合到发现中
        templateUrl: 'partials/notice.html' + ST.v,
        controller: 'NoticeCtrl',
        access: false
    }).when('/noticeDetail/:noticeId', { //公告详情 - 停用
        templateUrl: 'partials/noticeDetail.html' + ST.v,
        controller: 'NoticeDetailCtrl',
        access: false
    }).when('/help', { //客服中心
        templateUrl: 'partials/help.html' + ST.v,
        controller: 'HelpCtrl',
        access: true
    }).when('/helpDetail/:helpDetailId', { //客服详情
        templateUrl: 'partials/helpDetail.html' + ST.v,
        controller: 'HelpDetailCtrl',
        access: true
    }).when('/knowledgeDetail/:knowledgeId', { //投资课堂详情
        templateUrl: 'partials/knowledgeDetail.html' + ST.v,
        controller: 'KnowledgeDetailCtrl',
        access: true
    }).when('/helpCenter', { //用户留言
        templateUrl: 'partials/helpCenter.html' + ST.v,
        controller: 'HelpCenterCtrl',
        access: false
    }).when('/helpAsk', { //用户提问
        templateUrl: 'partials/helpAsk.html' + ST.v,
        controller: 'HelpAskCtrl',
        access: false
    }).when('/guide', { //新手指引
        templateUrl: 'partials/guide.html' + ST.v,
        controller: 'GuideCtrl',
        access: true
    }).when('/safe', { //安全保证
        templateUrl: 'partials/safe.html' + ST.v,
        controller: 'SafeCtrl',
        access: true
    }).when('/aboutUs', { //关于我们
        templateUrl: 'partials/aboutUs.html' + ST.v,
        controller: 'AboutUsCtrl',
        access: true
    }).when('/introduce', { //一分钟介绍
        templateUrl: 'partials/introduce.html' + ST.v,
        controller: 'IntroduceCtrl',
        access: true
    }).when('/newYearActivity', { //新年活动
        templateUrl: 'partials/newYearActivity.html' + ST.v,
        controller: 'NewYearActivityCtrl',
        access: true
    }).when('/outerTrade/:commodityNo/:type', { //买入
        templateUrl: 'partials/outerTrade.html' + ST.v,
        controller: 'OuterTradeCtrl',
        access: true
    }).when('/outerTradeBuy/:commodityNo/:type/:buyChange', { //买入 + 交易方向
        templateUrl: 'partials/outerTradeBuy.html' + ST.v,
        controller: 'OuterTradeBuyCtrl',
        access: false
    }).when('/outerTradeSell/:commodityNo/:type', { //持仓
        templateUrl: 'partials/outerTradeSell.html' + ST.v,
        controller: 'OuterTradeSellCtrl',
        access: false
    }).when('/outerTradeResult/:commodityNo/:type', { //结算列表
        templateUrl: 'partials/outerTradeResult.html' + ST.v,
        controller: 'OuterTradeResultCtrl',
        access: false
    }).when('/outerAgreementSigned/:commodityNo', { //协议签署
        templateUrl: 'partials/outerAgreementSigned.html' + ST.v,
        controller: 'OuterAgreementSignedCtrl',
        access: false
    }).when('/agreementCL', { //原油协议
        templateUrl: 'partials/agreementCL.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementGC', { //美黄金协议
        templateUrl: 'partials/agreementGC.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementXBT', { //比特币协议
        templateUrl: 'partials/agreementXBT.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementHSI', { //恒指协议
        templateUrl: 'partials/agreementHSI.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementMHI', { //小恒指协议
        templateUrl: 'partials/agreementMHI.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementSI', { //美白银协议
        templateUrl: 'partials/agreementSI.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementDAX', { //德指协议
        templateUrl: 'partials/agreementDAX.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementCN', { //富时A50协议
        templateUrl: 'partials/agreementCN.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementHG', { //美精铜协议
        templateUrl: 'partials/agreementHG.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementNQ', { //美精铜协议
        templateUrl: 'partials/agreementNQ.html' + ST.v,
        controller: 'OuterAgreementCtrl',
        access: true
    }).when('/agreementSaletorCL', { //美原油协议签署
        templateUrl: 'partials/agreementSaletorCL.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorXBT', {
        templateUrl: 'partials/agreementSaletorXBT.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorGC', {
        templateUrl: 'partials/agreementSaletorGC.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorHG', {
        templateUrl: 'partials/agreementSaletorHG.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorHSI', {
        templateUrl: 'partials/agreementSaletorHSI.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorMHI', {
        templateUrl: 'partials/agreementSaletorMHI.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorSI', {
        templateUrl: 'partials/agreementSaletorSI.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorDAX', {
        templateUrl: 'partials/agreementSaletorDAX.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorCN', {
        templateUrl: 'partials/agreementSaletorCN.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/agreementSaletorNQ', {
        templateUrl: 'partials/agreementSaletorNQ.html' + ST.v,
        controller: 'OuterAgreementSaletorCtrl',
        access: true
    }).when('/tradeRuleCL', { //交易规则
        templateUrl: 'partials/tradeRuleCL.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleXBT', {
        templateUrl: 'partials/tradeRuleXBT.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleGC', {
        templateUrl: 'partials/tradeRuleGC.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleHSI', {
        templateUrl: 'partials/tradeRuleHSI.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleMHI', {
        templateUrl: 'partials/tradeRuleMHI.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleSI', {
        templateUrl: 'partials/tradeRuleSI.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleDAX', {
        templateUrl: 'partials/tradeRuleDAX.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleCN', {
        templateUrl: 'partials/tradeRuleCN.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleHG', {
        templateUrl: 'partials/tradeRuleHG.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleXBT', {
        templateUrl: 'partials/tradeRuleXBT.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/tradeRuleNQ', {
        templateUrl: 'partials/tradeRuleNQ.html' + ST.v,
        controller: 'OuterTradeRuleCtrl',
        access: true
    }).when('/settleNoInfo', { //结算 - 暂无数据页
        templateUrl: 'partials/settleNoInfo.html' + ST.v,
        access: true
    }).when('/alipay', { //支付宝
        templateUrl: 'partials/alipay.html' + ST.v,
        controller: 'AlipayCtrl',
        access: false
    }).when('/alipayDetail', { //支付宝充值详情 - 停用
        templateUrl: 'partials/alipayDetail.html' + ST.v,
        controller: 'AlipayDetailCtrl',
        access: false
    }).when('/aliPayIdentification', { //支付宝账户认证 - 停用
        templateUrl: 'partials/aliPayIdentification.html' + ST.v,
        controller: 'AliPayIdentificationCtrl',
        access: false
    }).when('/dev', { //开发调试
        templateUrl: 'partials/dev.html' + ST.v,
        controller: 'DevCtrl',
        access: true
    }).when('/article-20160831', { //文章
        templateUrl: 'partials/article-20160831.html' + ST.v,
        controller: 'ArticleCtrl',
        access: true
    }).when('/article-20161021', {
        templateUrl: 'partials/article-20161021.html' + ST.v,
        controller: 'ArticleCtrl',
        access: true
    }).when('/article-20161130', {
        templateUrl: 'partials/article-20161130.html' + ST.v,
        controller: 'ArticleCtrl',
        access: true
    }).when('/article-20161230', {
        templateUrl: 'partials/article-20161230.html' + ST.v,
        controller: 'ArticleCtrl',
        access: true
    }).when('/article-20170109', {
        templateUrl: 'partials/article-20170109.html' + ST.v,
        controller: 'ArticleCtrl',
        access: true
    }).when('/article-20170116', {
        templateUrl: 'partials/article-20170116.html' + ST.v,
        controller: 'ArticleCtrl',
        access: true
    }).when('/article-20170309', {
        templateUrl: 'partials/article-20170309.html' + ST.v,
        controller: 'ArticleCtrl',
        access: true
    }).when('/actPacket', { //红包活动
        templateUrl: 'partials/actPacket.html' + ST.v,
        controller: 'ActPacketCtrl',
        access: true
    }).when('/myPacket', { //我的红包
        templateUrl: 'partials/myPacket.html' + ST.v,
        controller: 'MyPacketCtrl',
        access: false
    }).when('/extension', { //推广赚钱
        templateUrl: 'partials/extension.html' + ST.v,
        controller: 'ExtensionCtrl',
        access: true
    }).when('/attentionWechat', { //关注微信
        templateUrl: 'partials/attentionWechat.html' + ST.v,
        controller: 'AttentionCtrl',
        access: false
    }).when('/phoneBind1', { //手机绑定
        templateUrl: 'partials/phoneBind1.html' + ST.v,
        controller: 'PhoneBind1Ctrl',
        access: false
    }).when('/phoneBind2', {
        templateUrl: 'partials/phoneBind2.html' + ST.v,
        controller: 'PhoneBind2Ctrl',
        access: false
    }).when('/oneYuanIntroduce', { //一元介绍
        templateUrl: 'partials/oneYuanIntroduce.html' + ST.v,
        controller: 'OneYuanIntroduceCtrl',
        access: true
    }).when('/discover', { //发现
        templateUrl: 'partials/discover.html' + ST.v,
        controller: 'DiscoverCtrl',
        access: true
    }).when('/oneYuanTrade', { //一元交易
        templateUrl: 'partials/oneYuanTrade.html' + ST.v,
        controller: 'OneYuanTradeCtrl',
        access: true
    }).when('/oneYuanTradeBuy/:buyChange', {
        templateUrl: 'partials/oneYuanTradeBuy.html' + ST.v,
        controller: 'OneYuanTradeBuyCtrl',
        access: false
    }).when('/oneYuanTradeSell', {
        templateUrl: 'partials/oneYuanTradeSell.html' + ST.v,
        controller: 'OneYuanTradeSellCtrl',
        access: false
    }).when('/oneYuanTradeResult', {
        templateUrl: 'partials/oneYuanTradeResult.html' + ST.v,
        controller: 'OneYuanTradeResultCtrl',
        access: false
    }).when('/news', { //资讯
        templateUrl: 'partials/news.html' + ST.v,
        controller: 'NewsCtrl',
        access: true
    }).when('/dayGainList', { //昨日盈利榜单 - 停用
        templateUrl: 'partials/dayGainList.html' + ST.v,
        controller: 'DayGainListCtrl',
        access: true
    }).when('/activityCenter', { //活动中心
        templateUrl: 'partials/activityCenter.html' + ST.v,
        controller: 'ActivityCenterCtrl',
        access: true
    }).when('/getSimCoin', { //推广赚模拟币
        templateUrl: 'partials/getSimCoin.html' + ST.v,
        controller: 'GetSimCoinCtrl',
        access: false
    }).when('/dangerTip', { //风险提示
        templateUrl: 'partials/dangerTip.html' + ST.v,
        controller: 'GuideCtrl',
        access: true
    }).when('/investLesson', { //投资课堂
        templateUrl: 'partials/investLesson.html' + ST.v,
        controller: 'InvestLessonCtrl',
        access: true
    }).when('/newYearNotice', { //新年公告
        templateUrl: 'partials/newYearNotice.html' + ST.v,
        controller: 'NewYearNoticeCtrl',
        access: true
    }).otherwise({ //其他不符合以上路由的，统一定向到index
        redirectTo: '/index'
    });
}).run(function ($rootScope, $location, AuthService) {
    $rootScope.$on('$routeChangeStart', function (evt, next) {
        // X.loading.hide();
        // X.dialog.close();
        var backURL = next.originalPath,
            key;
        if (next.originalPath && !next.access) {
            for (key in next.params) {
                //noinspection JSUnfilteredForInLoop
                backURL = backURL.replace(':' + key, next.params[key]);
            }
            X.log('-----路由拦截 URL:' + backURL + '-----');
            if (!AuthService.auth()) {
                X.log('-----用户未登录，跳转到登录-----');
                evt.preventDefault();
                $location.path('/login').search({
                    'goURL': backURL
                });
            } else {
                X.log('-----用户已登录，放行-----');
            }
        } else {
            X.log('-----路由放行 URL:' + next.originalPath + '-----');
        }
    });
});