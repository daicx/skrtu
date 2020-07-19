package com.skr.skrtu.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;

public class CMDUtil {
    /**
     * 执行命令
     *
     * @param shFile .sh文件地址
     * @param args   命令携带参数
     * @param shPath
     * @return
     */
    public static int cmd(String shFile, String args, String shPath) {
        try {
            String sh = "sh" + shFile + args;
            File dir = new File(shPath);
            String[] evnp = {"val=2", "call=Bash Shell"};
            Process process = Runtime.getRuntime().exec(sh, evnp, dir);
            process.waitFor();
//            process = Runtime.getRuntime().exec(cmd);
            BufferedReader input = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line = "";
            while ((line = input.readLine()) != null) {
                System.out.println(line);
            }
            input.close();
            return process.exitValue();
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }
}
